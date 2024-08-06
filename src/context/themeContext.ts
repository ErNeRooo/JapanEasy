import { createContext } from "react";
import { themeTypes } from "../App";

interface themeContextTypes {
  themeObject: themeTypes;
  setter: (state: themeTypes) => void;
}

const themeContext = createContext<themeContextTypes>({
  themeObject: {
    name: "dark",
    sidePanelsColor: "#212121",
    mainColor: "#2D2D2D",
    secondColor: "#2D2D2D",
    searchBarColor: "rgba(52, 52, 52, 0.75)",
    wordColor: "linear-gradient(to top right, #353535, #484848)",
    mainFontColor: "white",
    secondFontColor: "BFBFBF",
    iconsColor: "filter: invert(100%) brightness(200%)",
    lineColor: "#4c4c4c",
  },
  setter: () => {},
});

export default themeContext;
