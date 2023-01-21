import { useContext, useState } from "react";
import PlaylistContext from "@/contexts/PlaylistContext";
import { useRouter } from "next/router";

import SearchTab from "./SearchTab";
import SelectedTracksTab from "./SelectedTracksTab";

import { motion } from "framer-motion";

const Tabs = () => {
  const router = useRouter();

  const { selectedTracks, isTrackChanged, handleTracksUpdate } =
    useContext(PlaylistContext);
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      name: `Tracks (${selectedTracks.length})`,
      component: <SelectedTracksTab />,
    },
    {
      name: "Search",
      component: <SearchTab />,
    },
  ];
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center mb-4 relative">
        {tabs.map((tab, i) => {
          return (
            <div
              key={i}
              className="relative px-6 flex items-center justify-center"
            >
              <button
                className={`font-bold uppercase py-2 ${
                  i === currentTab ? "text-primary" : "text-muted"
                }`}
                onClick={() => setCurrentTab(i)}
              >
                {tab.name}
              </button>
              {currentTab === i && (
                <motion.div
                  className="h-1 w-full bg-primary absolute -bottom-1"
                  layoutId="underline"
                />
              )}
            </div>
          );
        })}
        {!isTrackChanged && router.query.id ? (
          <button
            className="absolute right-0 btn bg-primary text-white"
            onClick={handleTracksUpdate}
          >
            Update Changes
          </button>
        ) : null}
      </div>
      <div>{tabs[currentTab].component}</div>
    </div>
  );
};

export default Tabs;
