import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const useLogin = () => {
  const router = useRouter();

  const [url, setUrl] = useState(""); // Spotify login url
  const [isLoggingIn, setLoggingIn] = useState(false);
  const [code, setCode] = useState("");

  // GET url
  const getLoginUrl = async () => {
    try {
      const result = await axios.get("/api/auth/login");
      setUrl(result.data.loginUrl);
    } catch (error) {
      console.error(error);
    }
  };

  // GET access token and authenticate
  const getToken = async () => {
    try {
      setLoggingIn(true);
      const result = await axios.post("/api/auth/token", { code });

      if (window !== undefined) {
        localStorage.setItem("access_token", result.data.access_token);
        localStorage.setItem("refresh_token", result.data.refresh_token);
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoggingIn(false);
    }
  };

  // On page load
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      router.push("/");
    } else {
      !url && getLoginUrl();

      // Check if code is available
      const urlParams = new URLSearchParams(window.location.search);
      const authCode = urlParams.get("code");
      authCode && setCode(authCode);
    }
  }, []);

  // When code has value
  useEffect(() => {
    code && getToken();
  }, [code]);

  return { url, isLoggingIn };
};

export default useLogin;
