import useSearchTracks from "@/hooks/spotify/useSearchTracks";

import Search from "@/components/forms/Search";
import Tracks from "@/components/lists/Tracks";
import Loading from "@/components/utils/Loading";

const SearchTab = () => {
  const { query, onChangeQuery, searchTracks, isLoading, tracks } = useSearchTracks();
  return (
    <div>
      <h1 className="font-semibold mb-1">Search to tracks to add in your playlist</h1>
      <Search
        value={query}
        handleChange={onChangeQuery}
        handleSearch={searchTracks}
      />
      <div className="mt-4">
        {isLoading ? <Loading /> : <Tracks tracks={tracks} isSelection={true} />}
      </div>
    </div>
  );
};

export default SearchTab;
