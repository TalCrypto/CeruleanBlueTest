import { ethers, upgrades } from "hardhat";
import { expect, util } from "chai";
import {
  PrimaryNFT,
  SecondaryNFT,
  IERC165Upgradeable__factory,
  IERC721Upgradeable__factory,
} from "../typechain-types";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Interface } from "../utils";

describe("test", function () {
  let pToken: PrimaryNFT;
  let sToken: SecondaryNFT;
  let owner: SignerWithAddress;
  let player: SignerWithAddress;
  let hacker: SignerWithAddress;

  const IERC165Interface = IERC165Upgradeable__factory.createInterface();
  const IERC721Interface = IERC721Upgradeable__factory.createInterface();
  const IERC165InterfaceId = Interface.getInterfaceID(IERC165Interface);
  const IERC721InterfaceId = Interface.getInterfaceID(IERC721Interface);

  it("deployment", async function () {
    const accounts = await ethers.getSigners();

    owner = accounts[0];
    player = accounts[1];
    hacker = accounts[2];

    const primaryNFT = await ethers.getContractFactory("PrimaryNFT");
    pToken = (await upgrades.deployProxy(primaryNFT, [
      "PrimaryNFT",
      "PNFT",
      "https://example.com/",
    ])) as PrimaryNFT;
    await pToken.deployed();

    const secondaryNFT = await ethers.getContractFactory("SecondaryNFT");
    sToken = (await upgrades.deployProxy(secondaryNFT, [
      "SecondaryNFT",
      "SNFT",
      "https://example123.com/",
      pToken.address,
    ])) as SecondaryNFT;
    await sToken.deployed();
  });

  describe("Transactions", function () {
    it("should fail when minting a primary nft with insufficient funds", async function () {
      await expect(
        pToken.connect(player).mint({ value: ethers.utils.parseEther("0.005") })
      ).to.be.revertedWith("Insufficient funds to mint.");
    });

    it("should success when minting a primary nft", async function () {
      await pToken
        .connect(player)
        .mint({ value: ethers.utils.parseEther("0.01") });
      expect(await pToken.balanceOf(player.address)).to.equal(1);
      expect(await ethers.provider.getBalance(pToken.address)).to.equal(
        ethers.utils.parseEther("0.01")
      );
      expect(await pToken.ownerOf(0)).to.equal(player.address);
    });

    it("should fail when minting primary nfts more than one", async function () {
      await expect(
        pToken.connect(player).mint({ value: ethers.utils.parseEther("0.01") })
      ).to.be.revertedWith("Can mint only one NFT at this cycle.");
    });

    it("should success when minting a primary nft after reseting counting timestamp", async function () {
      await pToken.resetCountingTimestamp();
      await pToken
        .connect(player)
        .mint({ value: ethers.utils.parseEther("0.01") });
      expect(await pToken.balanceOf(player.address)).to.equal(2);
      expect(await ethers.provider.getBalance(pToken.address)).to.equal(
        ethers.utils.parseEther("0.02")
      );
      expect(await pToken.ownerOf(1)).to.equal(player.address);
    });

    it("should own a secondary nft after escrowing the primary nft", async function () {
      await pToken
        .connect(player)
        ["safeTransferFrom(address,address,uint256)"](
          player.address,
          sToken.address,
          0
        );
      expect(await sToken.balanceOf(player.address)).to.equal(1);
      expect(await sToken.ownerOf(0)).to.equal(player.address);
      expect(await pToken.ownerOf(0)).to.equal(sToken.address);
    });

    it("should fail when swapping with other's secondary nft", async function () {
      await expect(sToken.connect(hacker).swap(0)).to.be.revertedWith(
        "Not an owner"
      );
    });

    it("should fail when swapping with other wallet", async function () {
      await sToken
        .connect(player)
        .transferFrom(player.address, hacker.address, 0);
      await expect(sToken.connect(hacker).swap(0)).to.be.revertedWith(
        "Not escrowed for this nft"
      );
      await sToken
        .connect(hacker)
        .transferFrom(hacker.address, player.address, 0);
    });

    it("should success when swapping with his secondary nft and the secondary nft is burnt at the same time", async function () {
      expect(await pToken.ownerOf(0)).to.equal(sToken.address);
      await sToken.connect(player).swap(0);
      expect(await sToken.balanceOf(player.address)).to.equal(0);
      expect(await pToken.ownerOf(0)).to.equal(player.address);
      await expect(sToken.ownerOf(0)).to.be.revertedWith(
        "ERC721: owner query for nonexistent token"
      );
    });

    it("should support interface of IERC721 ", async function () {
      expect(
        await pToken.supportsInterface(
          IERC721InterfaceId.xor(IERC165InterfaceId)._hex
        )
      ).to.be.true;
      expect(
        await sToken.supportsInterface(
          IERC721InterfaceId.xor(IERC165InterfaceId)._hex
        )
      ).to.be.true;
    });
  });
});
