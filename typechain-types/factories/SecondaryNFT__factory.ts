/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SecondaryNFT, SecondaryNFTInterface } from "../SecondaryNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "secondaryId",
        type: "uint256",
      },
    ],
    name: "escrowedNFTOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "primaryId",
        type: "uint256",
      },
    ],
    name: "escrowedStatusOf",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "baseTokenURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "whitelistedNFTaddress",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "secondaryId",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "whiteListedNFTAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061202d806100206000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c806353d05432116100b857806395d89b411161007c57806395d89b4114610309578063a22cb46514610311578063ac34aa9614610324578063b88d4fde14610335578063c87b56dd14610348578063e985e9c51461035b57610142565b806353d05432146102875780635c6d8da1146102bd5780636352211e146102d057806370a08231146102e357806394b918de146102f657610142565b8063150b7a021161010a578063150b7a02146101fd57806318160ddd1461022957806323b872dd1461023b5780632f745c591461024e57806342842e0e146102615780634f6ccce71461027457610142565b806301ffc9a71461014757806306fdde031461016f578063081812fc14610184578063095ea7b3146101af5780630a9d8bc3146101c4575b600080fd5b61015a610155366004611c42565b610397565b60405190151581526020015b60405180910390f35b6101776103aa565b6040516101669190611dbf565b610197610192366004611d0f565b61043c565b6040516001600160a01b039091168152602001610166565b6101c26101bd366004611c19565b6104d6565b005b61015a6101d2366004611c19565b6001600160a01b0391909116600090815260cd60209081526040808320938352929052205460ff1690565b61021061020b366004611ad0565b6105ec565b6040516001600160e01b03199091168152602001610166565b6099545b604051908152602001610166565b6101c2610249366004611a95565b610677565b61022d61025c366004611c19565b6106a8565b6101c261026f366004611a95565b61073e565b61022d610282366004611d0f565b610759565b61022d610295366004611c19565b6001600160a01b0391909116600090815260cc60209081526040808320938352929052205490565b6101c26102cb366004611c7a565b6107fa565b6101976102de366004611d0f565b6108a4565b61022d6102f1366004611a49565b61091b565b6101c2610304366004611d0f565b6109a2565b610177610b27565b6101c261031f366004611bdf565b610b36565b60cb546001600160a01b0316610197565b6101c2610343366004611b66565b610b41565b610177610356366004611d0f565b610b79565b61015a610369366004611a63565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b60006103a282610c54565b90505b919050565b6060606580546103b990611f32565b80601f01602080910402602001604051908101604052809291908181526020018280546103e590611f32565b80156104325780601f1061040757610100808354040283529160200191610432565b820191906000526020600020905b81548152906001019060200180831161041557829003601f168201915b5050505050905090565b6000818152606760205260408120546001600160a01b03166104ba5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b60006104e1826108a4565b9050806001600160a01b0316836001600160a01b0316141561054f5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016104b1565b336001600160a01b038216148061056b575061056b8133610369565b6105dd5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016104b1565b6105e78383610c79565b505050565b60cb546000906001600160a01b0316331461065b5760405162461bcd60e51b815260206004820152602960248201527f43616e6e6f7420616363657074206f74686572207468616e2077686974656c6960448201526839ba32b21027232a1760b91b60648201526084016104b1565b6106658585610ce7565b50630a85bd0160e11b95945050505050565b6106813382610d4d565b61069d5760405162461bcd60e51b81526004016104b190611e72565b6105e7838383610e44565b60006106b38361091b565b82106107155760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016104b1565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b6105e783838360405180602001604052806000815250610b41565b600061076460995490565b82106107c75760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016104b1565b609982815481106107e857634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050919050565b60006108066001610feb565b9050801561081e576000805461ff0019166101001790555b6108288585611070565b825161083b9060ca906020860190611904565b5060cb80546001600160a01b0319166001600160a01b038416179055801561089d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b6000818152606760205260408120546001600160a01b0316806103a25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016104b1565b60006001600160a01b0382166109865760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016104b1565b506001600160a01b031660009081526068602052604090205490565b336109ac826108a4565b6001600160a01b0316146109f15760405162461bcd60e51b815260206004820152600c60248201526b2737ba1030b71037bbb732b960a11b60448201526064016104b1565b33600081815260cc6020908152604080832085845282528083205493835260cd825280832084845290915290205460ff16610a6e5760405162461bcd60e51b815260206004820152601960248201527f4e6f7420657363726f77656420666f722074686973206e66740000000000000060448201526064016104b1565b33600081815260cd602090815260408083208584529091529020805460ff1916905560cb546001600160a01b03169063b88d4fde9030906040516001600160e01b031960e085901b1681526001600160a01b0392831660048201529116602482015260448101849052608060648201526000608482015260a401600060405180830381600087803b158015610b0257600080fd5b505af1158015610b16573d6000803e3d6000fd5b50505050610b2382611102565b5050565b6060606680546103b990611f32565b610b233383836111aa565b610b4b3383610d4d565b610b675760405162461bcd60e51b81526004016104b190611e72565b610b7384848484611279565b50505050565b6000818152606760205260409020546060906001600160a01b0316610bf85760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b60648201526084016104b1565b6000610c026112ac565b90506000815111610c225760405180602001604052806000815250610c4d565b80610c2c846112bb565b604051602001610c3d929190611d53565b6040516020818303038152906040525b9392505050565b60006001600160e01b0319821663780e9d6360e01b14806103a257506103a2826113d6565b600081815260696020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610cae826108a4565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610cf260c95490565b6001600160a01b038416600081815260cd602090815260408083208784528252808320805460ff1916600117905592825260cc81528282208483529052208390559050610d3f8382611426565b6105e760c980546001019055565b6000818152606760205260408120546001600160a01b0316610dc65760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016104b1565b6000610dd1836108a4565b9050806001600160a01b0316846001600160a01b03161480610e1857506001600160a01b038082166000908152606a602090815260408083209388168352929052205460ff165b80610e3c5750836001600160a01b0316610e318461043c565b6001600160a01b0316145b949350505050565b826001600160a01b0316610e57826108a4565b6001600160a01b031614610ebb5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b60648201526084016104b1565b6001600160a01b038216610f1d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104b1565b610f28838383611575565b610f33600082610c79565b6001600160a01b0383166000908152606860205260408120805460019290610f5c908490611eef565b90915550506001600160a01b0382166000908152606860205260408120805460019290610f8a908490611ec3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a46105e7565b60008054610100900460ff1615611032578160ff16600114801561100e5750303b155b61102a5760405162461bcd60e51b81526004016104b190611e24565b5060006103a5565b60005460ff8084169116106110595760405162461bcd60e51b81526004016104b190611e24565b506000805460ff191660ff831617905560016103a5565b600054610100900460ff166110db5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016104b1565b81516110ee906065906020850190611904565b5080516105e7906066906020840190611904565b600061110d826108a4565b905061111b81600084611575565b611126600083610c79565b6001600160a01b038116600090815260686020526040812080546001929061114f908490611eef565b909155505060008281526067602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a4610b23565b816001600160a01b0316836001600160a01b0316141561120c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016104b1565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611284848484610e44565b61129084848484611580565b610b735760405162461bcd60e51b81526004016104b190611dd2565b606060ca80546103b990611f32565b6060816112e057506040805180820190915260018152600360fc1b60208201526103a5565b8160005b811561130a57806112f481611f6d565b91506113039050600a83611edb565b91506112e4565b60008167ffffffffffffffff81111561133357634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561135d576020820181803683370190505b5090505b8415610e3c57611372600183611eef565b915061137f600a86611f88565b61138a906030611ec3565b60f81b8183815181106113ad57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506113cf600a86611edb565b9450611361565b60006001600160e01b031982166380ac58cd60e01b148061140757506001600160e01b03198216635b5e139f60e01b145b806103a257506301ffc9a760e01b6001600160e01b03198316146103a2565b6001600160a01b03821661147c5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016104b1565b6000818152606760205260409020546001600160a01b0316156114e15760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016104b1565b6114ed60008383611575565b6001600160a01b0382166000908152606860205260408120805460019290611516908490611ec3565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a4610b23565b6105e783838361168d565b60006001600160a01b0384163b1561168257604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906115c4903390899088908890600401611d82565b602060405180830381600087803b1580156115de57600080fd5b505af192505050801561160e575060408051601f3d908101601f1916820190925261160b91810190611c5e565b60015b611668573d80801561163c576040519150601f19603f3d011682016040523d82523d6000602084013e611641565b606091505b5080516116605760405162461bcd60e51b81526004016104b190611dd2565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610e3c565b506001949350505050565b6001600160a01b0383166116e8576116e381609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b61170b565b816001600160a01b0316836001600160a01b03161461170b5761170b838261174a565b6001600160a01b03821661172757611722816117e7565b6105e7565b826001600160a01b0316826001600160a01b0316146105e7576105e782826118c0565b600060016117578461091b565b6117619190611eef565b6000838152609860205260409020549091508082146117b4576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b6099546000906117f990600190611eef565b6000838152609a60205260408120546099805493945090928490811061182f57634e487b7160e01b600052603260045260246000fd5b90600052602060002001549050806099838154811061185e57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255828152609a909152604080822084905585825281205560998054806118a457634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905550505050565b60006118cb8361091b565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b82805461191090611f32565b90600052602060002090601f0160209004810192826119325760008555611978565b82601f1061194b57805160ff1916838001178555611978565b82800160010185558215611978579182015b8281111561197857825182559160200191906001019061195d565b50611984929150611988565b5090565b5b808211156119845760008155600101611989565b600067ffffffffffffffff808411156119b8576119b8611fc8565b604051601f8501601f19908116603f011681019082821181831017156119e0576119e0611fc8565b816040528093508581528686860111156119f957600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b03811681146103a557600080fd5b600082601f830112611a3a578081fd5b610c4d8383356020850161199d565b600060208284031215611a5a578081fd5b610c4d82611a13565b60008060408385031215611a75578081fd5b611a7e83611a13565b9150611a8c60208401611a13565b90509250929050565b600080600060608486031215611aa9578081fd5b611ab284611a13565b9250611ac060208501611a13565b9150604084013590509250925092565b600080600080600060808688031215611ae7578081fd5b611af086611a13565b9450611afe60208701611a13565b935060408601359250606086013567ffffffffffffffff80821115611b21578283fd5b818801915088601f830112611b34578283fd5b813581811115611b42578384fd5b896020828501011115611b53578384fd5b9699959850939650602001949392505050565b60008060008060808587031215611b7b578384fd5b611b8485611a13565b9350611b9260208601611a13565b925060408501359150606085013567ffffffffffffffff811115611bb4578182fd5b8501601f81018713611bc4578182fd5b611bd38782356020840161199d565b91505092959194509250565b60008060408385031215611bf1578182fd5b611bfa83611a13565b915060208301358015158114611c0e578182fd5b809150509250929050565b60008060408385031215611c2b578182fd5b611c3483611a13565b946020939093013593505050565b600060208284031215611c53578081fd5b8135610c4d81611fde565b600060208284031215611c6f578081fd5b8151610c4d81611fde565b60008060008060808587031215611c8f578384fd5b843567ffffffffffffffff80821115611ca6578586fd5b611cb288838901611a2a565b95506020870135915080821115611cc7578485fd5b611cd388838901611a2a565b94506040870135915080821115611ce8578384fd5b50611cf587828801611a2a565b925050611d0460608601611a13565b905092959194509250565b600060208284031215611d20578081fd5b5035919050565b60008151808452611d3f816020860160208601611f06565b601f01601f19169290920160200192915050565b60008351611d65818460208801611f06565b835190830190611d79818360208801611f06565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611db590830184611d27565b9695505050505050565b600060208252610c4d6020830184611d27565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611ed657611ed6611f9c565b500190565b600082611eea57611eea611fb2565b500490565b600082821015611f0157611f01611f9c565b500390565b60005b83811015611f21578181015183820152602001611f09565b83811115610b735750506000910152565b600281046001821680611f4657607f821691505b60208210811415611f6757634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611f8157611f81611f9c565b5060010190565b600082611f9757611f97611fb2565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611ff457600080fd5b5056fea2646970667358221220d42a15a8c89a392767ac157b78934f61cb100b07077081289195c79c790556b864736f6c63430008020033";

export class SecondaryNFT__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SecondaryNFT> {
    return super.deploy(overrides || {}) as Promise<SecondaryNFT>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SecondaryNFT {
    return super.attach(address) as SecondaryNFT;
  }
  connect(signer: Signer): SecondaryNFT__factory {
    return super.connect(signer) as SecondaryNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SecondaryNFTInterface {
    return new utils.Interface(_abi) as SecondaryNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SecondaryNFT {
    return new Contract(address, _abi, signerOrProvider) as SecondaryNFT;
  }
}