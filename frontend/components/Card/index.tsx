import React, { FC, PropsWithChildren } from "react";

const Card: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-4 text-center bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 border-teal-600 dark:border-teal-700 m-2 gap-2">
      {children}
    </div>
  );
};

export default Card;
