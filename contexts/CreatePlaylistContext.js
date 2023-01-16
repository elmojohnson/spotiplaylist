import { createContext } from "react";

const CreatePlaylistContext = createContext({
    selectedTracks: [],
    handleSelect: () => {},
    createPlaylist: () => {},
    isCreating: false
});

export default CreatePlaylistContext;