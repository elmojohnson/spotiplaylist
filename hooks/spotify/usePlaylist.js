import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import spotify from "@/lib/spotify";

const usePlaylist = () => {
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const getPlaylist = async () => {
    try {
      setLoading(true);
      const result = await spotify.get("/playlists/" + router.query.id);

      setName(result.data.name);
      setImage(result.data.images[0].url);
      setDescription(result.data.description);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.query.id && getPlaylist()
  }, [router])

  return { isLoading, name, image, description };
};

export default usePlaylist;
