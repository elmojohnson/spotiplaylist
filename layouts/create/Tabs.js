import { useContext, useState } from "react";
import CreatePlaylistContext from "@/contexts/CreatePlaylistContext";

import SearchTab from "./SearchTab";
import SelectedTracksTab from "./SelectedTracksTab";

const Tabs = () => {
  const { selectedTracks } = useContext(CreatePlaylistContext);
  const [currentTab, setCurrentTab] = useState(0);
  const tabs = [
    {
      name: "Search",
      component: <SearchTab />,
    },
    {
      name: `Selected (${selectedTracks.length})`,
      component: <SelectedTracksTab />,
    },
  ];
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center mb-4">
        {tabs.map((tab, i) => {
          return (
            <div
              key={i}
              className="relative px-6 flex items-center justify-center"
            >
              <button
                className={`font-bold uppercase ${
                  i === currentTab ? "text-primary" : "text-muted"
                }`}
                onClick={() => setCurrentTab(i)}
              >
                {tab.name}
              </button>
              {currentTab === i && (
                <div className="h-1 w-full bg-primary absolute -bottom-1" />
              )}
            </div>
          );
        })}
      </div>
      <div>{tabs[currentTab].component}</div>
    </div>
  );
};

export default Tabs;
