import React from "react";
import TrackItem from "../items/TrackItem";
import { motion } from "framer-motion";

const Tracks = ({ tracks, isSelection }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ delay: 0.5 }}
      className="grid md:grid-cols-2 grid-cols-1 gap-3"
    >
      {tracks.map((track, i) => {
        return <TrackItem key={i} track={track} isSelection={isSelection} />;
      })}
    </motion.div>
  );
};

export default Tracks;
