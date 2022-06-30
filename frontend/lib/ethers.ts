import { ethers } from "ethers";
import contractAbi from "./abi.json";

const CONTRACT_ADDRESS = "0xE1A757400fD4E4480E605Fe9175D20D83c815218";
// 0x6f6E5ab889b72B9f769933dF3ea922d339307234
const ethereum = typeof window !== "undefined" ? window.ethereum : undefined;

const init = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);

  const signer = provider.getSigner();

  const contract = new ethers.Contract(
    CONTRACT_ADDRESS,
    contractAbi.abi,
    signer
  );
  return { signer, contract };
};

export default init;
