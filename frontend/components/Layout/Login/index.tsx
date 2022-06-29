import React, { FC } from "react";

const Connect: FC = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
          {/*image*/}
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Dao
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Connect;
