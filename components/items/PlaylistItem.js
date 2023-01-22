import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const PlaylistItem = ({ id, uri, name, image, trackCount }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="bg-white hover:shadow-xl flex flex-col items-center justify-end space-y-3 overflow-hidden rounded-lg p-3"
    >
      {image && (
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          priority
          className="rounded-lg w-full"
        />
      )}
      <div className="flex flex-col w-full leading-none">
        <Link
          href={"/playlists/" + id}
          className="font-bold text-xl line-clamp-2 hover:text-primary"
        >
          {name}
        </Link>
        <p className="text-muted text-sm">{trackCount} tracks</p>
      </div>
    </motion.div>
  );
};

export default PlaylistItem;
