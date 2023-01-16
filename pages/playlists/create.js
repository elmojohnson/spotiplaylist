import useMutatePlaylist from "@/hooks/spotify/useMutatePlaylist";
import useSearchTracks from "@/hooks/spotify/useSearchTracks";
import PlaylistContext from "@/contexts/PlaylistContext";

import Layout from "@/layouts/Layout";
import Tabs from "@/layouts/create/Tabs";
import Loading from "@/components/utils/Loading";
import PlaylistForm from "@/components/forms/PlaylistForm";

const CreatePlaylist = () => {
  const createPlaylist = useMutatePlaylist();
  const searchTracks = useSearchTracks();

  return (
    <Layout>
      <PlaylistContext.Provider
        value={{ ...createPlaylist, ...searchTracks }}
      >
        {createPlaylist.isCreating ? (
          <Loading message="Creating your playlist..." />
        ) : (
          <div className="flex flex-col space-y-4">
            <PlaylistForm />
            <Tabs />
          </div>
        )}
      </PlaylistContext.Provider>
    </Layout>
  );
};

export default CreatePlaylist;
