import React, { FC } from "react";
import Card from "../Card";
import FundButton from "../Fund/Button";
import ProgressRing from "./ProgressRing";

const PoolStat: FC = () => {
  const dummyData = [
    {
      title: "Pool Value",
      value: "$1.1m",
    },
    {
      title: "Projects",
      value: "202",
    },
    {
      title: "Active Participants",
      value: "121",
    },
    {
      title: "Total Projects",
      value: "12003",
    },
    {
      title: "Total Participants",
      value: "5642",
    },
  ];
  const renderList = (): JSX.Element[] => {
    return dummyData.map((el, index) => {
      return (
        <li key={index}>
          <div className="flex items-center justify-between p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-100 dark:bg-gray-700">
            <span className="whitespace-nowrap">{el.title}</span>
            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              {el.value}
            </span>
          </div>
        </li>
      );
    });
  };
  return (
    <Card>
      <p className="text-center font-bold text-2xl dark:text-white text-teal-800 mb-2">
        Round 0
      </p>
      <ProgressRing />
      <div className="flex flex-col justify-center space-y-2 mt-2">
        <ul className="space-y-2">{renderList()}</ul>
        <FundButton />
      </div>
    </Card>
  );
};

export default PoolStat;
