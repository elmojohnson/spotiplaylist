import { useState } from "react";
import spotify from "@/lib/spotify";

const useSearchTracks = () => {
  // Search tracks
  const [query, setQuery] = useState("");
  const [tracks, setTracks] = useState([]);
  const [isLoading, setLoading] = useState(false);

  // On change query
  const onChangeQuery = (e) => setQuery(e.target.value);

  // Search tracks
  const searchTracks = async () => {
    try {
      setLoading(tracks);
      const result = await spotify.get(`/search?q=${query}&type=track`);
      setTracks(result.data.tracks.items);

      console.log(result.data)
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { query, onChangeQuery, searchTracks, isLoading, tracks };
};

export default useSearchTracks;
