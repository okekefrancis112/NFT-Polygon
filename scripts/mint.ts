require("dotenv").config({ path: ".env" });
import { BytesLike } from "ethers";
import { ethers } from "hardhat";

async function main() {
// 0xB72705c99DF57aE0B4aedD0B20a69D809db9136E       cryptopunks contract address
// 0xB50285433aAda7261A8F518E25128Ee0ED1DFcA2       Azuki contract address
// 0x6730E0C8910218d64DEf48Dc0434f41CAe2F3630       BoredApeYachtClub
// 0x2243DD81C21ad104DBe6D3e12CfC9e3db38A4932       CloneX
// 0xf150f26D794e3d1129dD4c2AF356Da1a76dDeDaE       Cool Cats
// 0xd17bFB32Fe23e731f4Aa23D87686aA29c01aCCC6       Cryptoadz
// 0xde0b1D6d5c39f9b64C439dB6B0F8B116Ea9F818f       Doodles
// 0xcEE4593b3Abd20D75B421F34D93e45F838311C28       MutantApeYachtClub
// 0x4a0039c8D8C54A25Ebc718e278613921E938720D       Vee
// 0xE35546d6418f206DE55eC67b4BCEF010322B8C50       World of Women 



    const nft = await ethers.getContractFactory("NFT");
    const mint = await nft.attach("0xE35546d6418f206DE55eC67b4BCEF010322B8C50")

    const minted = await mint.safeMint("0x23d5C0bAdf63ff6422B5B9310211d9BcE147e720", "https://gateway.pinata.cloud/ipfs/QmZmhPD9GHF4SCism94hbxXjrM53TTG1ugXhX9E3e47krk");

    console.log("Minted NFT: ", minted);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x4ae278774FD70E9d72007dB24BE5799e3F1E53fF