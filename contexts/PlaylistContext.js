import { createContext } from "react";

const PlaylistContext = createContext({
  // Playlist info
  name: "",
  description: "",
  image: "",

  // Mutating playlist
  selectedTracks: [],
  handleSelect: () => {},
  createPlaylist: () => {},
  isCreating: false,

  // Search tracks
  search: {
    query: "",
    onChangeQuery: () => {},
    searchTracks: () => {},
    tracks: [],
    isLoading: false,
  },
});

export default PlaylistContext;
