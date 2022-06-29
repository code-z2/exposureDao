import React from "react";

const FundButton = () => {
  return (
    <button
      type="button"
      className="text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5  mr-2 -ml-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
      Fund
    </button>
  );
};

export default FundButton;
