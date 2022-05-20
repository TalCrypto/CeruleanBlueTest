import { run, network } from "hardhat";
import { deployedAddresses } from "../utils/constants";

async function main() {
  const addresses: any = deployedAddresses as any;

  await run("verify:verify", {
    address: addresses[network.name].primaryNFTImpl,
    contract: "contracts/PrimaryNFT.sol:PrimaryNFT"
  });

  await run("verify:verify", {
    address: addresses[network.name].secondaryNFTImpl,
    contract: "contracts/SecondaryNFT.sol:SecondaryNFT"
  });

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });