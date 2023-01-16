import PlaylistItem from "@/components/items/PlaylistItem";
import Loading from "@/components/utils/Loading";
import useMyPlaylists from "@/hooks/spotify/useMyPlaylists";
import Layout from "../layouts/Layout";

const Home = () => {
  const { items, isLoading } = useMyPlaylists();

  return (
    <Layout>
      <div>
        <h1 className="heading mb-4">My Playlists</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col space-y-4">
            {items.map((item) => {
              return (
                <PlaylistItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.images[1]?.url}
                  trackCount={item.tracks.total}
                />
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
