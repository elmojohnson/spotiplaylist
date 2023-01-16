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
  query: "",
  onChangeQuery: () => {},
  searchTracks: () => {},
  tracks: [],
  isLoading: false,
  handleNextPage: () => {},
});

export default PlaylistContext;
