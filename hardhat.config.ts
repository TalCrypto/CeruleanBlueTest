import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";
import "solidity-coverage";
import "@openzeppelin/hardhat-upgrades";

const ETHER_API_KEY = process.env.ETHER_API_KEY;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const POLY_API_KEY = process.env.POLY_API_KEY;
const BSC_API_KEY = process.env.BSC_API_KEY;
const PRIVATE_KEY =
  process.env.PRIVATE_KEY! ||
  "0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3"; // well known private key
const TEST_PRIVATE_KEY = process.env.TEST_PRIVATE_KEY || "";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.2",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {},
    localhost: {},
    bsc: {
      url: `https://bsc-dataseed1.binance.org/`,
      accounts: [PRIVATE_KEY],
    },
    testnet: {
      url: `https://data-seed-prebsc-2-s3.binance.org:8545/`,
      accounts: [TEST_PRIVATE_KEY],
    },
    poly: {
      url: `https://rpc-mainnet.maticvigil.com/`,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000
    },
    mumbai: {
      url: `https://rpc-mumbai.maticvigil.com/`,
      accounts: [TEST_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [TEST_PRIVATE_KEY],
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [TEST_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000
    },
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  },
  etherscan: {
    apiKey: {
      bsc: BSC_API_KEY,
      bscTestnet: BSC_API_KEY,
      polygon: POLY_API_KEY,
      polygonMumbai: POLY_API_KEY,
      ropsten: ETHER_API_KEY
    }
  },
};

export default config;
