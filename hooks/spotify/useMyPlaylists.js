import spotify from "@/lib/spotify";
import React, { useEffect, useState } from "react";

const useMyPlaylists = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getMyPlaylists = async () => {
    try {
      setLoading(true);
      const result = await spotify.get("/me/playlists");
      
      setItems(result.data.items);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if(window !== undefined) {
      localStorage.getItem("access_token") && getMyPlaylists();
    }
  }, [])

  return { items, isLoading };
};

export default useMyPlaylists;
