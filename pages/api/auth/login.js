export default function handler(req, res) {
  if (req.method === "GET") {
    const clientId = process.env.CLIENT_ID;
    const redirectUri = process.env.REDIRECT_URI;
    const scopes = [
      "streaming",
      "user-read-email",
      "user-read-private",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-top-read",
      "user-read-recently-played",
      "app-remote-control",
      "playlist-read-collaborative",
      "playlist-modify-public",
      "playlist-modify-private"
    ];

    res.status(200).json({
      loginUrl: `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
        " "
      )}&show_dialog=true`,
    });
  }
}
