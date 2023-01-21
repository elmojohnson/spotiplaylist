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
  isTrackChanged: false,
  handleTracksUpdate: () => {},
  updatePlaylistInfo: () => {},
  deletePlaylist: () => {},

  // Search tracks
  query: "",
  onChangeQuery: () => {},
  searchTracks: () => {},
  tracks: [],
  isLoading: false,
  handleNextPage: () => {},
});

export default PlaylistContext;
