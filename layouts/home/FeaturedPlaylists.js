import useFeaturedPlaylists from "@/hooks/spotify/useFeaturedPlaylists";

import PlaylistItem from "@/components/items/PlaylistItem";
import Loading from "@/components/utils/Loading";

const FeaturedPlaylists = () => {
  const { message, items, isLoading } = useFeaturedPlaylists();

  if(isLoading) {
    return <Loading />
  }

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="heading">{message}</h1>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
        {items.map((item) => {
          return (
            <PlaylistItem
              key={item.id}
              id={item.id}
              uri={item.uri}
              name={item.name}
              image={item.images[0].url}
              trackCount={item.tracks.total}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedPlaylists;
