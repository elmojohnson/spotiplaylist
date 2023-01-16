import Image from "next/image";
import { motion } from "framer-motion";
import PlayButton from "../buttons/PlayButton";
import { useContext } from "react";
import CreatePlaylistContext from "@/contexts/CreatePlaylistContext";

const TrackItem = ({ id, uri, name, artists, image, isSelection, track }) => {
  const {selectedTracks, handleSelect} = useContext(CreatePlaylistContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`bg-white ${isSelection ? "hover:bg-base" : "hover:shadow-xl"} rounded-lg p-3 flex items-center space-x-3 overflow-visible`}
    >
      {isSelection && <input type="checkbox" value={track} onChange={() => handleSelect(track)} checked={selectedTracks.includes(track)} />}
      {image && (
        <Image
          src={image}
          alt={name}
          width={50}
          height={50}
          priority
          className="rounded-lg"
        />
      )}
      <div className="flex flex-col flex-grow">
        <h5 className="font-semibold line-clamp-1">{name}</h5>
        <span className="text-muted line-clamp-1">
          {artists.map((a) => a.name).join(", ")}
        </span>
      </div>
      <div className="flex items-center space-x-1">
        <PlayButton />
      </div>
    </motion.div>
  );
};

export default TrackItem;
