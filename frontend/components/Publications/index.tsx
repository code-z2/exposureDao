import React, { FC, useState } from "react";
import Card from "../Card";
import Details from "./Details";
import Discussion from "./Discussion";

const Publication: FC = () => {
  const testProjectData = [
    {
      owner: "0xbfff...ffff",
      projectId: 245,
      title: "Frst Breweries Coffee Company",
      email: "test@gmail.com",
      url: "https://test.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque quo alias modi consectetur voluptatibus sint quis similique nesciunt eius neque necessitatibus eveniet amet, repellendus voluptatem sapiente architecto optio labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque quo alias modi consectetur voluptatibus sint quis similique nesciunt eius neque necessitatibus eveniet amet, repellendus voluptatem sapiente architecto optio labore.",
      images: ["/football.jpg"],
      socials: {
        twitter: "test",
        instagram: "john",
        linkedin: "live",
        discord: "",
      },
      promotions: 58,
    },
    {
      owner: "0xbfff...ffff",
      projectId: 245,
      title: "Encode",
      email: "test@gmail.com",
      url: "https://test.com",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque quo alias modi consectetur voluptatibus sint quis similique nesciunt eius neque necessitatibus eveniet amet, repellendus voluptatem sapiente architecto optio labore.",
      images: ["/football.jpg"],
      socials: {
        twitter: "please",
        instagram: "",
        linkedin: "",
        discord: "yest",
      },
      promotions: 584,
    },
  ];
  return (
    <>
      {testProjectData.map((el, index) => (
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
            <Discussion promotions={el.promotions} />
          </Card>
        </div>
      ))}
    </>
  );
};

export default Publication;
