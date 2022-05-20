// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/IERC721ReceiverUpgradeable.sol";

contract SecondaryNFT is
    Initializable,
    IERC721ReceiverUpgradeable,
    ERC721EnumerableUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    CountersUpgradeable.Counter private _tokenIdTracker;

    string private _baseTokenURI;

    address private _whiteListedNFTAddress;

    //user => secondary nft id => primary nft id
    mapping(address => mapping(uint256 => uint256)) private _escrowedNFTOf;

    //user => primary nft id => escrowed
    //_escrowedNFTOf has a default value 0 when not initialized, so we need an extra info whether a primary nft is escrowed.
    mapping(address => mapping(uint256 => bool)) private _escrowedStatusOf;

    function initialize(
        string memory name,
        string memory symbol,
        string memory baseTokenURI,
        address whitelistedNFTaddress
    ) public initializer {
        __ERC721_init_unchained(name, symbol);
        _baseTokenURI = baseTokenURI;
        _whiteListedNFTAddress = whitelistedNFTaddress;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    function escrowedStatusOf(address user, uint256 primaryId) public view returns(bool) {
        return _escrowedStatusOf[user][primaryId];
    }

    function escrowedNFTOf(address user, uint256 secondaryId) public view returns(uint256) {
        return _escrowedNFTOf[user][secondaryId];
    }

    /**
     * @return The address of whitelisted address
     */
    function whiteListedNFTAddress() public view returns (address) {
        return _whiteListedNFTAddress;
    }

    /**
     * @dev Allow users to mint an NFT, provided they transfer the NFT from the primary contract to this contract.
     */
    function _escrowNFT(address from, uint256 primaryId) private {
        uint256 secondaryId = _tokenIdTracker.current();
        _escrowedStatusOf[from][primaryId] = true;
        _escrowedNFTOf[from][secondaryId] = primaryId;
        // We cannot just use balanceOf to create the new tokenId because tokens
        // can be burned (destroyed), so we need a separate counter.
        _mint(from, secondaryId);
        _tokenIdTracker.increment();
    }

    /**
     * @dev Swap back the second NFT for the first one
     */
    function swap(uint256 secondaryId) external {
        require(ownerOf(secondaryId)==_msgSender(), "Not an owner");
        uint256 primaryId = _escrowedNFTOf[_msgSender()][secondaryId];
        require(escrowedStatusOf(_msgSender(), primaryId), "Not escrowed for this nft");
        _escrowedStatusOf[_msgSender()][primaryId] = false;
        IERC721Upgradeable(_whiteListedNFTAddress).safeTransferFrom(address(this), _msgSender(), primaryId, "");
        _burn(secondaryId);
    }

    /**
     * ERC721Receiver hook for single transfer.
     * @dev Reverts if the caller is not the whitelisted NFT contract.
     */
    function onERC721Received(
        address, /*operator*/
        address from,
        uint256 id,
        bytes calldata /*data*/
    ) external override returns (bytes4) {
        require(
            whiteListedNFTAddress() == _msgSender(),
            "Cannot accept other than whitelisted NFT."
        );
        _escrowNFT(from, id);
        return this.onERC721Received.selector;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721EnumerableUpgradeable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    /**
     * @dev This empty reserved space is put in place to allow future versions to add new
     * variables without shifting down storage in the inheritance chain.
     * See https://docs.openzeppelin.com/contracts/4.x/upgradeable#storage_gaps
     */
    uint256[48] private __gap;
}
