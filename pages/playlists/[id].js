import PlaylistContext from "@/contexts/PlaylistContext";

import useMutatePlaylist from "@/hooks/spotify/useMutatePlaylist";
import useSearchTracks from "@/hooks/spotify/useSearchTracks";

import Layout from "@/layouts/Layout";
import Tabs from "@/layouts/playlist_tab/Tabs";

const Playlist = () => {
  const mutatePlaylist = useMutatePlaylist();
  const searchTracks = useSearchTracks();

  return (
    <Layout>
      <PlaylistContext.Provider value={{ ...mutatePlaylist, ...searchTracks }}>
        <Tabs />
      </PlaylistContext.Provider>
    </Layout>
  );
};

export default Playlist;
