import { ethers, upgrades } from "hardhat";

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const primaryNFT = await ethers.getContractFactory("PrimaryNFT");
  const pToken = (await upgrades.deployProxy(primaryNFT, ["PrimaryNFT", "PNFT", "https://example.primary.com/"]));
  await pToken.deployed();
  console.log("PrimaryNFT address:", pToken.address);

  const secondaryNFT = await ethers.getContractFactory("SecondaryNFT");
  const sToken = (await upgrades.deployProxy(secondaryNFT, ["SecondaryNFT", "SNFT", "https://example.secondary.com/", pToken.address]));
  await sToken.deployed();
  console.log("SecondaryNFT address:", sToken.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });