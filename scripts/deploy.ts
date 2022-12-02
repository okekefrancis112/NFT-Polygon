import { ethers } from "hardhat";

// RINKEBY CONTRACT ADDRESS: 0x6dE4aA9B7449Fa424ca69BBB3243364A4d2eBAF5
// OPENSEA: https://testnets.opensea.io/assets/rinkeby/0xf81b7c93811a6c7440e4778c744770d6c03191b7/0

async function main() {

  const cryptoPunks = await ethers.getContractFactory("NFT");
  const CryptoPunks = await cryptoPunks.deploy();

  await CryptoPunks.deployed();

  console.log(`CryptoPunks is deployed to ${CryptoPunks.address}`);
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});