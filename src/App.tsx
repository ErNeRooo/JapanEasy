import "./App.module.sass";
import { DictionaryPage } from "./components/DictionaryPage/DictionaryPage";
import { firebaseConfig } from "./firebaseConfig";
import firebase from "firebase/compat/app";
import themeContext from "./context/themeContext";
import { useState } from "react";

function App() {
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

  document.documentElement.style.setProperty("--bodyColor", theme.mainColor);

  firebase.initializeApp(firebaseConfig);

  return (
    <themeContext.Provider value={{ themeObject: theme, setter: setTheme }}>
      <DictionaryPage></DictionaryPage>
    </themeContext.Provider>
  );
}

export interface themeTypes {
  name: string;
  sidePanelsColor: string;
  mainColor: string;
  secondColor: string;
  searchBarColor: string;
  wordColor: string;
  mainFontColor: string;
  secondFontColor: string;
  iconsColor: string;
  lineColor: string;
}

export default App;
