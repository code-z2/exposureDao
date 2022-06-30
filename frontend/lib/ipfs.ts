import { Web3Storage } from "web3.storage";

const apiToken: string = process.env.WEB3_STORAGE_API_KEY!;

const store = async (file: File) => {
    const client = new Web3Storage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI4Q0M2ZEM2OERERDkzNzJkQmY2NDYzZTJhMUZkNzNiRDVBYUQ5YTYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NDgzNzg4NTQ1MTEsIm5hbWUiOiJtZXRhZ3JhbSJ9.0dRQlrW5-6DobxQmMINUGWMjRqmkTpgS2gpo0XtsHGM" });
    const cid = await client.put([file]);
    const info = await client.status(cid);
    const uri = `https://${cid}.ipfs.dweb.link/${file.name}`;
    return { cid, uri, info };
};

export default store;