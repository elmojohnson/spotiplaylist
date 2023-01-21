import { motion } from "framer-motion";

const UpdatePlaylistModal = ({ toggleOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full h-full fixed bottom-0 right-0 z-50 flex items-center justify-center"
    >
      <div className="h-full w-full bg-black opacity-75 fixed top-0 right-0" />
      <div className="bg-white rounded-lg h-1/2 w-1/2 p-4 shadow-xl z-50">
        <button className="btn" onClick={toggleOpen}>
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default UpdatePlaylistModal;
