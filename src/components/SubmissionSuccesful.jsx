import React from "react";
import { NavLink } from "react-router-dom";

const SubmissionSuccesful = () => {
  return (
    <div className="container px-[5%] mx-auto h-[55vh] flex justify-center items-center">
      <div className="w-full mx-auto max-w-7xl">
        <div className="flex flex-col my-auto text-center">
          <h1 className="mb-6 text-3xl font-semibold">
            Your Application is Successfully Submitted
          </h1>
          <NavLink
            to={"/"}
            className="p-3 mx-auto font-semibold bg-white border border-solid rounded-md w-fit hover:bg-neutral-200 border-neutral-300 text-neutral-900 "
          >
            Go Back to Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SubmissionSuccesful;
