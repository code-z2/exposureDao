import { Web3Storage } from "web3.storage";

const apiToken: string = process.env.WEB3_STORAGE_API_KEY!;

const store = async (file: File) => {
    const client = new Web3Storage({ token: apiToken });
    const cid = await client.put([file]);
    const info = await client.status(cid);
    const uri = `https://${cid}.ipfs.dweb.link/${file.name}`;
    return { cid, uri, info };
};

export default store;