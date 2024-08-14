import WordsBar from "./WordsBar/WordsBar.tsx";
import { TopBar } from "./TopBar/TopBar.tsx";
import NavPanel from "./NavPanel/NavPanel.tsx";
import isNavPanelOpenContext from "../../context/isNavPanelOpenStateContext.ts";
import isSettingsPanelOpenStateContext from "../../context/isSettingsPanelOpenStateContext.ts";
import { useState } from "react";
import SettingsPanel from "./SettingsPanel/SettingsPanel.tsx";
import searchContext from "../../context/searchContext.ts";
import searchTypes from "../../types/searchTypes.ts";

export const DictionaryPage = () => {
  const [isNavPanelOpen, setIsNavPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [search, setSearch] = useState<searchTypes>({
    searchPrompt: "",
    partOfSpeech: "",
    field: "Rank",
    order: "asc",
  });

  return (
    <isSettingsPanelOpenStateContext.Provider
      value={[isSettingsPanelOpen, setIsSettingsPanelOpen]}
    >
      <isNavPanelOpenContext.Provider
        value={[isNavPanelOpen, setIsNavPanelOpen]}
      >
        <searchContext.Provider value={[search, setSearch]}>
          <TopBar></TopBar>
          <WordsBar></WordsBar>
        </searchContext.Provider>

        <NavPanel></NavPanel>
        <SettingsPanel></SettingsPanel>
      </isNavPanelOpenContext.Provider>
    </isSettingsPanelOpenStateContext.Provider>
  );
};
