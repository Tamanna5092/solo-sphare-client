import React from "react";

const JobCard = ({ job }) => {
  const { job_title, category } = job || {};
  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800 ">
          Deadline: 2024
        </span>
        <span className="px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-200 rounded-full ">
          {category}
        </span>
      </div>
      <div>
        <h1 className="mt-2 text-lg font-semibold text-gray-800 ">
          {job_title}
        </h1>
        <p className="mt-2 text-sm text-gray-600 ">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            neque?
          </h1>
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">Range:</p>
      </div>
    </div>
  );
};

export default JobCard;
