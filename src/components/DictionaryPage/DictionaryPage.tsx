import { WordsBar } from "./WordsBar/WordsBar.tsx";
import { TopBar } from "./TopBar/TopBar.tsx";
import NavSidePanel from "./NavSidePanel/NavSidePanel.tsx";
import isOpenContext from "../../context/isNavSidePanelOpenContext.ts";
import { useState } from "react";

export const DictionaryPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <isOpenContext.Provider value={{ isOpen, setIsOpen }}>
      <TopBar></TopBar>
      <NavSidePanel></NavSidePanel>
      <WordsBar></WordsBar>
    </isOpenContext.Provider>
  );
};
