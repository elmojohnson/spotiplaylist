import React from "react";
import { CgSpinner } from "react-icons/cg";
import { motion } from "framer-motion";

const Loading = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.5 }}
      className="w-full h-32 flex justify-center items-center"
    >
      <div className="flex flex-col items-center justify-center">
        <CgSpinner className="animate-spin text-primary text-4xl" />
        <span className="text-muted">{message}</span>
      </div>
    </motion.div>
  );
};

export default Loading;
