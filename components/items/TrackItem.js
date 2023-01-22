import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";

import Image from "next/image";
import PlayButton from "../buttons/PlayButton";
import { motion } from "framer-motion";

const TrackItem = ({ track, isSelection }) => {
  const { selectedTracks, handleSelect } = useContext(PlaylistContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`bg-white ${
        isSelection ? "hover:bg-base" : "hover:shadow-xl"
      } rounded-lg p-3 flex items-center space-x-3 overflow-visible`}
    >
      {isSelection && (
        <input
          type="checkbox"
          value={track}
          onChange={() => handleSelect(track)}
          checked={selectedTracks.map((item) => item.id).includes(track.id)}
        />
      )}
      {track.album.images[1].url && (
        <Image
          src={track.album.images[1].url}
          alt={track.name}
          width={50}
          height={50}
          priority
          className="rounded-lg"
        />
      )}
      <div className="flex flex-col flex-grow">
        <h5 className="font-semibold line-clamp-1">{track.name}</h5>
        <span className="text-muted line-clamp-1">
          {track.artists.map((a) => a.name).join(", ")}
        </span>
      </div>
      {/* <div className="flex items-center space-x-1">
        <PlayButton />
      </div> */}
    </motion.div>
  );
};

export default TrackItem;
