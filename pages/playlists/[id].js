import PlaylistContext from "@/contexts/PlaylistContext";

import usePlaylist from "@/hooks/spotify/usePlaylist";
import useMutatePlaylist from "@/hooks/spotify/useMutatePlaylist";
import useSearchTracks from "@/hooks/spotify/useSearchTracks";

import Layout from "@/layouts/Layout";
import Tabs from "@/layouts/playlist_tab/Tabs";
import Header from "@/layouts/playlist/Header";

const Playlist = () => {
  const { name, image, description, updatePlaylistInfo } = usePlaylist();
  const mutatePlaylist = useMutatePlaylist();
  const searchTracks = useSearchTracks();

  return (
    <Layout>
      <PlaylistContext.Provider
        value={{ name, image, description, updatePlaylistInfo, ...mutatePlaylist, ...searchTracks }}
      >
        <div className="flex flex-col space-y-4">
          <Header />
          <Tabs />
        </div>
      </PlaylistContext.Provider>
    </Layout>
  );
};

export default Playlist;
