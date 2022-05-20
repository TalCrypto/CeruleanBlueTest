// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721BurnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/CountersUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/AddressUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract PrimaryNFT is
    Initializable,
    OwnableUpgradeable,
    ERC721EnumerableUpgradeable,
    ERC721BurnableUpgradeable
{
    using CountersUpgradeable for CountersUpgradeable.Counter;

    using AddressUpgradeable for address payable;

    CountersUpgradeable.Counter private _tokenIdTracker;

    string private _baseTokenURI;

    uint256 private _countingTimestamp;

    mapping(address => uint256) private _mintedTimestampOf;

    function initialize(
        string memory name,
        string memory symbol,
        string memory baseTokenURI
    ) public initializer {
        __ERC721_init_unchained(name, symbol);
        __Ownable_init();
        _baseTokenURI = baseTokenURI;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseTokenURI;
    }

    /**
     * @return The timestamp from when a player can mint only 1 NFT
     */
    function countingTimestamp() public view returns (uint256) {
        return _countingTimestamp;
    }

    /**
     * @return The timestamp when a minter has minted a NFT lastly
     */
    function mintedTimestampOf(address minter) public view returns (uint256) {
        return _mintedTimestampOf[minter];
    }

    /**
     * @dev Reset the counting timestamp to now
     */
    function resetCountingTimestamp() public onlyOwner {
        _countingTimestamp = block.timestamp;
    }

    /**
     * @dev Withdraws the funds from this contract.
     */
    function withdrawFunds() public {
        payable(owner()).sendValue(address(this).balance);
    }

    /**
     * @dev Allow users to mint 1 NFT at a given time, provided they pay a minimum price of 0.01 in ETH.
     */
    function mint() public payable {
        require(msg.value >= 0.01 ether, "Insufficient funds to mint.");
        require(
            mintedTimestampOf(_msgSender()) <= countingTimestamp(),
            "Can mint only one NFT at this cycle."
        );
        _mintedTimestampOf[_msgSender()] = block.timestamp;
        // We cannot just use balanceOf to create the new tokenId because tokens
        // can be burned (destroyed), so we need a separate counter.
        _mint(_msgSender(), _tokenIdTracker.current());
        _tokenIdTracker.increment();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721Upgradeable, ERC721EnumerableUpgradeable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Upgradeable, ERC721EnumerableUpgradeable)
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
