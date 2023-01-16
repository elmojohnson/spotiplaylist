import IconButton from "@/components/buttons/IconButton";
import Image from "next/image";
import React from "react";
import { MdPlayArrow } from "react-icons/md";

const Header = ({ name, description, image, owner }) => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex space-x-4">
        {image && (
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            priority
            className="rounded-lg sm:h-44 h-24 w-auto"
          />
        )}
        <div className="flex flex-col justify-between w-full">
          <div>
            <h1 className="heading line-clamp-2 leading-none">{name}</h1>
            <p className="line-clamp-3 text-muted text-sm mb-4">by {owner}</p>
          </div>
          <p>{description}</p>
          <IconButton
            icon={<MdPlayArrow />}
            text="Play"
            xs="bg-accent w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
