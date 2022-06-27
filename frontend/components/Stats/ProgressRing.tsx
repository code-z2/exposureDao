import React, { FC, useState } from "react";

const ProgressRing: FC = () => {
  const circumference = 30 * 2 * Math.PI;
  const [days, setDays] = useState(5);
  return (
    <div className=" inline-flex items-center justify-center overflow-hidden rounded-full">
      <svg className="w-20 h-20">
        <circle
          className="text-gray-300"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="40"
          cy="40"
        />
        <circle
          className="text-teal-600"
          strokeWidth="5"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (days / 40) * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="40"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-lg text-teal-700 dark:text-white">
        {40 - days}days
      </span>
    </div>
  );
};

export default ProgressRing;
