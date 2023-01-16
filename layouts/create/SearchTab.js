import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";

import Search from "@/components/forms/Search";
import Tracks from "@/components/lists/Tracks";
import Loading from "@/components/utils/Loading";

const SearchTab = () => {
  const { query, onChangeQuery, searchTracks, isLoading, tracks } = useContext(PlaylistContext);

  return (
    <div>
      <h1 className="font-semibold mb-1">
        Search Tracks
      </h1>
      <Search
        value={query}
        handleChange={onChangeQuery}
        handleSearch={searchTracks}
      />
      <div className="mt-4">
        {isLoading ? (
          <Loading />
        ) : (
          <Tracks tracks={tracks} isSelection={true} />
        )}
      </div>
    </div>
  );
};

export default SearchTab;
