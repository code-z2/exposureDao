import React, { FC } from "react";
import Card from "../Card";

const Publication: FC = () => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h5 className=" font-bold leading-none text-gray-900 dark:text-white">
          #1
        </h5>
        <a
          href="#"
          className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500"
        >
          0xSomething.crypto
        </a>
      </div>
      <div className="max-w-[500px] m-auto">
        <img src="/football.jpg" />
      </div>
      <div className="flex justify-end items-center mt-4">
        <button className="text-sm font-medium text-teal-600 dark:text-teal-500">
          <span className="inline-flex justify-center items-center p-2 ml-3 text-sm font-medium bg-gray-200 rounded-full dark:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                clipRule="evenodd"
              />
            </svg>
            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
              250
            </span>
          </span>
        </button>
      </div>
    </Card>
  );
};

export default Publication;
