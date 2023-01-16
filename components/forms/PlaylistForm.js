import { useContext } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";

import { Formik } from "formik";
import PlaylistSchema from "@/form_schema/PlaylistSchema";

const PlaylistForm = () => {
  const { createPlaylist } = useContext(PlaylistContext);
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
      }}
      validationSchema={PlaylistSchema}
      onSubmit={createPlaylist}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleChange,
        handleSubmit,
      }) => (
        <div className="rounded-lg bg-white p-4">
          <div className="flex items-start justify-between mb-4">
            <h1 className="heading">{values.name || "New Playlist"}</h1>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn bg-accent text-white w-fit self-end"
              disabled={isSubmitting}
            >
              Create
            </button>
          </div>
          <div className="flex flex-col space-y-3 w-full">
            <div>
              <input
                placeholder="Name"
                name="name"
                className={`border px-3 py-2 rounded-lg outline-none w-full ${
                  errors.name && touched.name ? "border-red-500" : null
                }`}
                value={values.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              {errors.name && touched.name ? (
                <span className="text-red-500">{errors.name}</span>
              ) : null}
            </div>
            <textarea
              name="description"
              className="border px-3 py-2 rounded-lg outline-none w-full"
              placeholder="Description"
              value={values.description}
              onChange={handleChange}
              disabled={isSubmitting}
            ></textarea>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default PlaylistForm;
