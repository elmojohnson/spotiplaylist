import axios from "axios";

const accessToken = typeof window !== "undefined" && localStorage.getItem("access_token");
const refreshToken = typeof window !== "undefined" && localStorage.getItem("refresh_token");

const spotify = axios.create({
  baseURL: "https://api.spotify.com/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

spotify.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { response, config } = error;

    // Refresh the access token if expired
    if (response.status === 401) {
      if (refreshToken) {
        try {
          const result = await axios.post("/api/auth/refresh_token", {
            refresh_token: refreshToken,
          });

          if (result.data.access_token) {
            localStorage.setItem("access_token", result.data.access_token);
            config.headers["Authorization"] = `Bearer ${result.data.access_token}`;
          }
        } catch (error) {
          console.error(error);
        }
      }

      return spotify(config);
    }

    return Promise.reject(error);
  }
);

export default spotify;
