import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import spotify from "@/lib/spotify";
import { toast } from "react-toastify";

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
      setImage(result.data.images[0]?.url);
      setDescription(result.data.description);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Update playlist info
  const updatePlaylistInfo = async (values, { setSubmitting }) => {
    try {
      const result = await spotify.put(`/playlists/${router.query.id}`, {
        name: values.name,
        description: values.description,
      });

      setName(values.name);
      setDescription(values.description);

      toast("Updated!", {
        type: "success"
      });
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  // Delete playlist
  const deletePlaylist = async () => {
    try {
      const result = await spotify.delete(`/playlists/${router.query.id}/followers`);
      console.log(result.data);
      
      toast("Deleted!", {
        type: "success"
      });

      router.push("/");
    } catch (error) {
     console.error(error) 
    }
  }

  useEffect(() => {
    router.query.id && getPlaylist();
  }, [router]);

  return { isLoading, name, image, description, updatePlaylistInfo, deletePlaylist };
};

export default usePlaylist;
