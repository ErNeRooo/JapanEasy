import WordsBar from "./WordsBar/WordsBar.tsx";
import { TopBar } from "./TopBar/TopBar.tsx";
import NavPanel from "./NavPanel/NavPanel.tsx";
import isNavPanelOpenContext from "../../context/isNavPanelOpenStateContext.ts";
import isSettingsPanelOpenStateContext from "../../context/isSettingsPanelOpenStateContext.ts";
import { useState } from "react";
import SettingsPanel from "./SettingsPanel/SettingsPanel.tsx";

export const DictionaryPage = () => {
  const [isNavPanelOpen, setIsNavPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);

  return (
    <isSettingsPanelOpenStateContext.Provider
      value={[isSettingsPanelOpen, setIsSettingsPanelOpen]}
    >
      <isNavPanelOpenContext.Provider
        value={[isNavPanelOpen, setIsNavPanelOpen]}
      >
        <TopBar></TopBar>
        <NavPanel></NavPanel>
        <WordsBar></WordsBar>
        <SettingsPanel></SettingsPanel>
      </isNavPanelOpenContext.Provider>
    </isSettingsPanelOpenStateContext.Provider>
  );
};
