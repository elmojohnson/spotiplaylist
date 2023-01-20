import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";

import Tracks from "@/components/lists/Tracks";
import { AnimatePresence } from "framer-motion";

const SelectedTracksTab = () => {
  const { selectedTracks } = useContext(PlaylistContext);
  return (
    <AnimatePresence>
      {selectedTracks.length === 0 ? (
        <p className="text-center text-muted">No tracks found</p>
      ) : (
        <Tracks tracks={selectedTracks} isSelection={true} />
      )}
    </AnimatePresence>
  );
};

export default SelectedTracksTab;
