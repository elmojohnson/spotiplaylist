import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";
import Tracks from "@/components/lists/Tracks";

const SelectedTracksTab = () => {
  const { selectedTracks } = useContext(PlaylistContext);
  return (
    <div>
      {selectedTracks.length === 0 ? (
        <p className="text-center text-muted">No tracks found</p>
      ) : (
        <Tracks tracks={selectedTracks} isSelection={true} />
      )}
    </div>
  );
};

export default SelectedTracksTab;
