import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import spotify from "@/lib/spotify";

const usePlaylist = () => {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [owner, setOwner] = useState("");
  const [tracks, setTracks] = useState([]);

  const getPlaylist = async () => {
    try {
      setLoading(true);
      const result = await spotify.get("/playlists/" + router.query.id);
      console.log(result.data);

      setName(result.data.name);
      setImage(result.data.images[0].url);
      setDescription(result.data.description);
      setOwner(result.data.owner.display_name);
      setTracks(result.data.tracks.items);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.query.id && getPlaylist()
  }, [router])

  return { isLoading, name, image, description, owner, tracks };
};

export default usePlaylist;
