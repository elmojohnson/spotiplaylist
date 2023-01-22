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
          <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {items.map((item) => {
              return (
                <PlaylistItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.images[0]?.url}
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
