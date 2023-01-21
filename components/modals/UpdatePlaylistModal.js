import { motion } from "framer-motion";
import PlaylistForm from "../forms/PlaylistForm";

import { MdClose } from "react-icons/md";
import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";

const UpdatePlaylistModal = ({ toggleOpen }) => {
  const { deletePlaylist } = useContext(PlaylistContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed bottom-0 right-0 z-50 flex items-center justify-center"
    >
      <div className="h-full w-full bg-black opacity-75 fixed top-0 right-0" />
      <div className="h-1/2 w-1/2 z-50 flex flex-col space-y-4 items-end">
        <button
          className="text-white flex items-center space-x-3"
          onClick={toggleOpen}
        >
          <MdClose />
          <span>Close</span>
        </button>
        <div className="w-full">
          <PlaylistForm />
        </div>
        <button
          className="btn w-full bg-red-500 text-white"
          onClick={deletePlaylist}
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default UpdatePlaylistModal;
