import "./App.module.sass";
import { firebaseConfig } from "./firebaseConfig";
import firebase from "firebase/compat/app";
import themeContext from "./context/themeStateContext";
import { useState } from "react";
import Seeder from "./utils/WordsDataSeeder";
import themeTypes from "./types/themeTypes";
import isSettingsPanelOpenStateContext from "./context/isSettingsPanelOpenStateContext";
import isNavPanelOpenContext from "./context/isNavPanelOpenStateContext";

function App({ children }: Props) {
  const [isNavPanelOpen, setIsNavPanelOpen] = useState(false);
  const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
  const [theme, setTheme] = useState<themeTypes>({
    name: "dark",
    sidePanelsColor: "#212121",
    mainColor: "#2D2D2D",
    secondColor: "#2D2D2D",
    searchBarColor: "rgba(52, 52, 52, 0.75)",
    wordColor: "linear-gradient(to top right, #353535, #484848)",
    mainFontColor: "white",
    secondFontColor: "#BFBFBF",
    iconsColor: "filter: invert(100%) brightness(200%)",
    lineColor: "#4c4c4c",
  });

  const isSeederEnabled = false;

  document.documentElement.style.setProperty("--bodyColor", theme.mainColor);

  firebase.initializeApp(firebaseConfig);

  if (isSeederEnabled) {
    Seeder();
  }

  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <isSettingsPanelOpenStateContext.Provider
        value={[isSettingsPanelOpen, setIsSettingsPanelOpen]}
      >
        <isNavPanelOpenContext.Provider
          value={[isNavPanelOpen, setIsNavPanelOpen]}
        >
          {children}
        </isNavPanelOpenContext.Provider>
      </isSettingsPanelOpenStateContext.Provider>
    </themeContext.Provider>
  );
}

interface Props {
  children: JSX.Element;
}

export default App;
