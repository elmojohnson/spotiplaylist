import React from "react";
import { motion } from "framer-motion";
import { MdPlayArrow } from "react-icons/md";

const PlayButton = ({ handleClick }) => {
  return (
    <motion.button
      className="p-1 text-xl text-white bg-accent rounded-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      onClick={handleClick}
    >
      <MdPlayArrow />
    </motion.button>
  );
};

export default PlayButton;
