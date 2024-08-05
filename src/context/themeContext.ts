import { createContext } from "react";
import { themeTypes } from "../App";

const themeContext = createContext<themeTypes>({
  name: "dark",
  sidePanelsColor: "#212121",
  mainColor: "#2D2D2D",
  mainFontColor: "white",
  secondFontColor: "BFBFBF",
});

export default themeContext;
