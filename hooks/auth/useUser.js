import React, { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState({
    display_name: "",
    email: "",
    images: [],
  });

  useEffect(() => {
    if (window !== undefined) {
        setUser({...JSON.parse(localStorage.getItem("user"))});
    }
  }, []);

  return { user };
};

export default useUser;
