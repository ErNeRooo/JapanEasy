import WordsBar from "./WordsBar/WordsBar.tsx";
import { TopBar } from "./TopBar/TopBar.tsx";
import NavPanel from "./NavPanel/NavPanel.tsx";
import isNavPanelOpenContext from "../../context/isNavPanelOpenContext.ts";
import isSettingsPanelOpenContext from "../../context/isSettingsPanelOpenContext.ts";
import { useState } from "react";
import SettingsPanel from "./SettingsPanel/SettingsPanel.tsx";

export const DictionaryPage = () => {
  const [isNavPanelOpen, setIsNavPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);

  return (
    <isSettingsPanelOpenContext.Provider
      value={{
        isOpen: isSettingsPanelOpen,
        setIsOpen: setIsSettingsPanelOpen,
      }}
    >
      <isNavPanelOpenContext.Provider
        value={{ isOpen: isNavPanelOpen, setIsOpen: setIsNavPanelOpen }}
      >
        <TopBar></TopBar>
        <NavPanel></NavPanel>
        <WordsBar></WordsBar>
        <SettingsPanel></SettingsPanel>
      </isNavPanelOpenContext.Provider>
    </isSettingsPanelOpenContext.Provider>
  );
};
