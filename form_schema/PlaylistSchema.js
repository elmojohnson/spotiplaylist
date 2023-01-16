import * as Yup from "yup";

const PlaylistSchema = Yup.object().shape({
    name: Yup.string().required("Please enter playlist's name"),
    description: Yup.string()
});

export default PlaylistSchema;