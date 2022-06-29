import { ethers } from "ethers";
import "dotenv/config";
import * as fundingJson from "../../artifacts/contracts/Funding.sol/Funding.json";

import { Funding } from "../../typechain";

// This key is already public on Herong's Tutorial Examples - v1.03, by Dr. Herong Yang
// Do never expose your keys like this
const EXPOSED_KEY =
  "8da4ef21b864d2cc526dbdb2a120bd2874c36c9d0a1fb7f8c63d7f7a8b41de8f";

const ADDR = ["0x123", "0x234", "0x345"];
const PROPOSALS = ["Pro 1", "Pro 2", "Pro 3"];

function convertStringArrayToBytes32(array: string[]) {
  const bytes32Array = [];
  for (let index = 0; index < array.length; index++) {
    bytes32Array.push(ethers.utils.formatBytes32String(array[index]));
  }
  return bytes32Array;
}

function setupProvider() {
  const infuraOptions = process.env.INFURA_API_KEY
    ? process.env.INFURA_API_SECRET
      ? {
          projectId: process.env.INFURA_API_KEY,
          projectSecret: process.env.INFURA_API_SECRET,
        }
      : process.env.INFURA_API_KEY
    : "";
  const options = {
    alchemy: process.env.ALCHEMY_API_KEY,
    infura: infuraOptions,
  };
  const provider = ethers.providers.getDefaultProvider("ropsten", options);
  return provider;
}

async function main() {
  const wallet =
    process.env.MNEMONIC && process.env.MNEMONIC.length > 0
      ? ethers.Wallet.fromMnemonic(process.env.MNEMONIC)
      : new ethers.Wallet(process.env.PRIVATE_KEY ?? EXPOSED_KEY);
  console.log(`Using address ${wallet.address}`);
  const provider = setupProvider();
  const signer = wallet.connect(provider);
  const balanceBN = await signer.getBalance();
  const balance = Number(ethers.utils.formatEther(balanceBN));
  console.log(`Wallet balance ${balance}`);
  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  console.log("Deploying Funding contract");
  const fundingFactory = new ethers.ContractFactory(
    fundingJson.abi,
    fundingJson.bytecode,
    signer
  );

  const fundingContract: Funding = (await fundingFactory.deploy(
    ADDR,
    convertStringArrayToBytes32(PROPOSALS),
    "0x25b3bebb5edcfac6d412319beddd8f04b55a9346"
  )) as Funding;
  console.log("Awaiting confirmations");
  await fundingContract.deployed();
  console.log("Completed");
  console.log(`Contract deployed at ${fundingContract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
