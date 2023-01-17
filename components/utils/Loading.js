import React from "react";
import { CgSpinner } from "react-icons/cg";

const Loading = ({ message }) => {
  return (
    <div className="w-full h-32 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <CgSpinner className="animate-spin text-primary text-4xl" />
        <span className="text-muted">{message}</span>
      </div>
    </div>
  );
};

export default Loading;
