import React from "react";
import TrackItem from "../items/TrackItem";

const Tracks = ({ tracks, isSelection }) => {
  return (
    <div className="flex flex-col space-y-3">
      {tracks.map((track, i) => {
        return (
          <TrackItem
            key={i}
            id={track.id}
            uri={track.uri}
            name={track.name}
            artists={track.artists}
            image={track.album.images[1].url}
            isSelection={isSelection}
            track={track}
          />
        );
      })}
    </div>
  );
};

export default Tracks;
