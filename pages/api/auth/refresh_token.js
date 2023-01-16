import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { refresh_token } = req.body;
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;

    try {
      const result = await axios.post(
        "https://accounts.spotify.com/api/token",
        { grant_type: "refresh_token", refresh_token },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization:
              "Basic " +
              new Buffer(client_id + ":" + client_secret).toString("base64"),
          },
        }
      );

      res.status(200).json(result.data);
    } catch (error) {
      res.json({ error });
    }
  }
}
