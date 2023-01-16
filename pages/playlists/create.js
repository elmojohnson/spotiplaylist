import useCreatePlaylists from "@/hooks/spotify/useCreatePlaylists";

import Layout from "@/layouts/Layout";
import PlaylistForm from "@/components/forms/PlaylistForm";
import Tabs from "@/layouts/create/Tabs";
import CreatePlaylistContext from "@/contexts/CreatePlaylistContext";
import Loading from "@/components/utils/Loading";

const CreatePlaylist = () => {
  const createPlaylist = useCreatePlaylists();

  return (
    <Layout>
      <CreatePlaylistContext.Provider value={createPlaylist}>
        {createPlaylist.isCreating ? (
          <Loading message="Creating your playlist..." />
        ) : (
          <div className="flex flex-col space-y-4">
            <PlaylistForm />
            <Tabs />
          </div>
        )}
      </CreatePlaylistContext.Provider>
    </Layout>
  );
};

export default CreatePlaylist;
