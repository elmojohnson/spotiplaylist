import { useEffect, useState } from "react";
import spotify from "@/lib/spotify";

const useSearchTracks = () => {
  // Search tracks
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // Pagination
  const [total, setTotal] = useState(0);
  const [currentUrl, setCurrentUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");
  const [isLoadingMore, setLoadingMore] = useState(false);

  // On change query search
  const onChangeQuery = (e) => setQuery(e.target.value);

  // Set nextUrl value to currentUrl
  const handleNextPage = () => setCurrentUrl(nextUrl);

  // Search tracks
  const searchTracks = async () => {
    try {
      setLoading(tracks);
      const result = await spotify.get(`/search?q=${query}&type=track`);
      setTracks(result.data.tracks.items);
      setTotal(result.data.tracks.total);
      setNextUrl(result.data.tracks.next);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Load more tracks
  const loadMoreTracks = async () => {
    try {
      setLoadingMore(tracks);
      const result = await spotify.get(currentUrl);
      setTracks([...tracks, ...result.data.tracks.items]);
      setTotal(result.data.tracks.total);
      setNextUrl(result.data.tracks.next);

      console.log(result.data.tracks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingMore(false);
    }
  };

  // When currentUrl value changed, load more tracks (pagination)
  useEffect(() => {
    tracks.length !== 0 && loadMoreTracks();
  }, [currentUrl]);

  return { query, isLoading, tracks, total, isLoadingMore, onChangeQuery, searchTracks, handleNextPage };
};

export default useSearchTracks;
