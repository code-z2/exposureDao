import React, { FC, useState } from "react";

interface IDiscussionProps {
  promotions: number;
}

const Discussion: FC<IDiscussionProps> = ({ promotions }) => {
  const [showDiscussion, setShowDiscussion] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center w-full rounded-t-xl focus:bg-gray-100 p-2 mt-2 dark:focus:bg-gray-800">
        <button
          type="button"
          className="font-medium text-left text-teal-500 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800  dark:text-teal-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setShowDiscussion(!showDiscussion)}
        >
          Discussion
        </button>
        <button
          className=" inline-flex p-2 justify-center items-center text-sm font-medium text-teal-600 dark:text-teal-500 focus:ring-gray-200 dark:focus:ring-gray-400  bg-gray-200 rounded-full dark:bg-gray-700"
          onClick={() => console.log("clicked on promotion")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-3"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
              clipRule="evenodd"
            />
          </svg>
          <span className="mr-2 text-teal-800 dark:text-teal-300">
            {promotions}
          </span>
        </button>
      </div>
      {showDiscussion && (
        <div className="divide-y divide-teal-700 p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <p className="mb-2 text-gray-500 dark:text-gray-400 text-justify">
            <span className="text-teal-700 dark:text-teal-600">
              Jones Macron -{" "}
            </span>
            you are not a chelsea fan so no promotion for you haha... just
            kidding
          </p>
          <div>
            <input
              type="text"
              id="comment"
              className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
              placeholder="comment ..."
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Discussion;
