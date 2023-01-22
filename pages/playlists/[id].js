import PlaylistContext from "@/contexts/PlaylistContext";

import usePlaylist from "@/hooks/spotify/usePlaylist";
import useMutatePlaylist from "@/hooks/spotify/useMutatePlaylist";
import useSearchTracks from "@/hooks/spotify/useSearchTracks";

import Layout from "@/layouts/Layout";
import Tabs from "@/layouts/playlist_tab/Tabs";
import Header from "@/layouts/playlist/Header";
import Loading from "@/components/utils/Loading";

import { motion, AnimatePresence } from "framer-motion";

const Playlist = () => {
  const playlist = usePlaylist();
  const mutatePlaylist = useMutatePlaylist();
  const searchTracks = useSearchTracks();

  return (
    <Layout>
      <PlaylistContext.Provider
        value={{ ...playlist, ...mutatePlaylist, ...searchTracks }}
      >
        <AnimatePresence>
          {playlist.isPlaylistLoading ? (
            <Loading />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col space-y-4"
            >
              <Header />
              <Tabs />
            </motion.div>
          )}
        </AnimatePresence>
      </PlaylistContext.Provider>
    </Layout>
  );
};

export default Playlist;
