import React, { FC, useEffect, useState } from "react";
import Card from "../Card";
import Details from "./Details";
import Discussion from "./Discussion";
import init from "../../lib/ethers";
import { Contract, ethers } from "ethers";
import { formatAddress } from "../../utils";

const readJSON = async (uri: string) => {
  try {
    const response = await fetch(uri);
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};

const Publication: FC = () => {
  const [data, setData] = useState<{}[]>([]);

  useEffect(() => {
    if (window.ethereum) {
      const { signer, contract } = init();
      fetchProjects(contract);
    }
  }, []);

  const fetchProjects = async (contract: Contract) => {
    const projects = await contract!.getAllProjects();
    const memo: {}[] = [];
    const reduceResult = () => {
      const result = projects.reduce(
        async (arr: {}[], project: { [key: string]: string }) => {
          const destructuredUri = await readJSON(project.uri);
          console.log(Array.isArray(memo));
          memo.push({
            name: project.name,
            title: ethers.utils.parseBytes32String(project.name),
            owner: formatAddress(project.projectAddress),
            promotions: project.voteCount.toString(),
            url: destructuredUri.url,
            description: destructuredUri.description,
            images: destructuredUri.images,
            email: destructuredUri.email,
            socials: destructuredUri.socials,
          });
          return memo;
        },
        []
      );
      console.log(memo);
      return result;
    };
    const d = await reduceResult();
    setData(d);
  };

  return (
    <>
      {data.map((el, index) => (
        <div key={index}>
          <Card>
            <div
              className="flex justify-between items-center mb-4"
              id={el.title}
            >
              <h5 className="font-bold leading-none text-teal-900 dark:text-teal-500">
                {/* #{index + 1} */}
                <span className="inline-flex justify-center items-center p-2 ml-3 text-sm font-bold text-gray-800 bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-300">
                  {el.title}
                </span>
              </h5>
              <div className="text-sm font-medium text-gray-600 hover:underline dark:text-gray-500 ">
                {el.owner}
              </div>
            </div>
            <Details
              website={el.url}
              email={el.email}
              description={el.description}
              socials={el.socials}
            />
            {el.images.map((img, index) => (
              <div className="max-w-[500px] m-auto" key={index}>
                <img src={img} />
              </div>
            ))}
            <Discussion promotions={el.promotions} name={el.name} />
          </Card>
        </div>
      ))}
    </>
  );
};

export default Publication;
