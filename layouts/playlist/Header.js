import React, { useContext, useState } from "react";
import UpdatePlaylistModal from "@/components/modals/UpdatePlaylistModal";
import PlaylistContext from "@/contexts/PlaylistContext";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { MdEdit } from "react-icons/md";

const Header = () => {
  const playlist = useContext(PlaylistContext);

  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!isOpen);

  return (
    <>
      <div className="bg-white rounded-lg p-4">
        <div className="flex space-x-4">
          {playlist.image && (
            <Image
              src={playlist.image}
              alt={playlist.name}
              width={200}
              height={200}
              priority
              className="rounded-lg sm:h-32 h-24 w-auto"
            />
          )}
          <div className="flex flex-col justify-center w-full relative">
            <h1 className="font-bold text-4xl line-clamp-2 leading-tight">
              {playlist.name}
            </h1>
            <p className="text-muted">{playlist.description}</p>
            <button className="absolute top-0 right-0 text-muted hover:text-primary uppercase flex items-center space-x-2 font-bold" onClick={toggleOpen}>
              <MdEdit />
              <span>Edit</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <UpdatePlaylistModal toggleOpen={toggleOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
