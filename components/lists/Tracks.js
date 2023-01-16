import React from "react";
import TrackItem from "../items/TrackItem";

const Tracks = ({ tracks, isSelection }) => {
  return (
    <div className="flex flex-col space-y-3">
      {tracks.map((track, i) => {
        return <TrackItem key={i} track={track} isSelection={isSelection} />;
      })}
    </div>
  );
};

export default Tracks;
