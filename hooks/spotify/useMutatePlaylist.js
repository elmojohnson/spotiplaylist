import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import spotify from "@/lib/spotify";

const useMutatePlaylist = () => {
  const router = useRouter();
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [isCreating, setCreating] = useState(false);

  // Load tracks from playlist
  const loadPlaylistTracks = async () => {
    try {
      const result = await spotify.get(`/playlists/${router.query?.id}/tracks`);
      setSelectedTracks(result.data.items.map(item => item.track))
    } catch (error) {
      console.error(error);
    }
  }

  // Handle track selection
  const handleSelect = (track) => {
    if (!selectedTracks.includes(track)) {
      setSelectedTracks([track, ...selectedTracks]);
    } else {
      setSelectedTracks(selectedTracks.filter((el) => el.id !== track.id));
    }
  };

  // Create the playlist
  const createPlaylist = async (values, { setSubmitting }) => {
    try {
      setCreating(true);

      // User reference to get user id
      const user = await spotify.get("/me");

      // Create playlist
      const newPlaylist = await spotify.post(`/users/${user.data.id}/playlists`, {
        name: values.name,
        description: values.description,
      });

      // Add tracks to playlist if there is one or more selected
      if(selectedTracks.length >= 1) {
        await spotify.post(`/playlists/${newPlaylist.data.id}/tracks`, {
          uris: selectedTracks.map(track => track.uri)
        });
      }

      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
      setCreating(false);
    }
  };

  // Run this if there is a query params (playlist id)
  useEffect(() => {
    router.query.id && loadPlaylistTracks();
  }, [router])

  return { createPlaylist, selectedTracks, handleSelect, isCreating };
};

export default useMutatePlaylist;
