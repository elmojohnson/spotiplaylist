import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";

import Search from "@/components/forms/Search";
import Tracks from "@/components/lists/Tracks";
import Loading from "@/components/utils/Loading";

import { AnimatePresence } from "framer-motion";

const SearchTab = () => {
  const {
    query,
    onChangeQuery,
    searchTracks,
    isLoading,
    tracks,
    handleNextPage,
    total,
    isLoadingMore,
  } = useContext(PlaylistContext);

  return (
    <div>
      <Search
        value={query}
        handleChange={onChangeQuery}
        handleSearch={searchTracks}
        isLoading={isLoading}
      />
      <div className="mt-4">
        <AnimatePresence>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {tracks.length !== 0 && (
                <div className="flex flex-col space-y-4">
                  <Tracks tracks={tracks} isSelection={true} />
                  {tracks.length < total && (
                    <button
                      onClick={handleNextPage}
                      className="btn w-full bg-primary text-white disabled:bg-muted disabled:animate-pulse"
                      disabled={isLoadingMore}
                    >
                      {isLoadingMore ? "Loading..." : "Load more"}
                    </button>
                  )}
                  <p>
                    {tracks.length} / {total}
                  </p>
                </div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchTab;
