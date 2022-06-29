import React, { FC } from "react";

const Navigation: FC = () => {
  return (
    <div className="w-full h-[50px]">
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-gray-100 dark:bg-gray-700 shadow rounded-lg"
      />
      <section
        id="bottom-navigation"
        className="block fixed inset-x-0 bottom-0 z-10 bg-gray-100 dark:bg-gray-700 shadow rounded-lg"
      >
        <div id="tabs" className="flex justify-between">
          <a
            href="#"
            className="w-full text-gray-800 dark:text-teal-500 dark:focus:text-white focus:text-teal-600 hover:text-teal-600 justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mb-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span className="tab tab-home block text-xs">Home</span>
          </a>
          <a
            href="#"
            className="w-full text-gray-800 dark:text-teal-500 dark:focus:text-white focus:text-teal-600 hover:text-teal-600 justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block mb-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                clipRule="evenodd"
              />
            </svg>
            <span className="tab tab-kategori block text-xs">Top Projects</span>
          </a>
          {/* <a
            href="#"
            className="w-full text-gray-800 dark:text-teal-500 dark:focus:text-white focus:text-teal-600 hover:text-teal-600 justify-center inline-block text-center pt-2 pb-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                clipRule="evenodd"
              />
            </svg>
            <span className="tab tab-explore block text-xs">Vote</span>
          </a> */}
        </div>
      </section>
    </div>
  );
};

export default Navigation;
