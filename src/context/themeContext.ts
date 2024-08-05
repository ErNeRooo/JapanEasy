import { createContext } from "react";
import { themeTypes } from "../App";

const themeContext = createContext<themeTypes>({
  name: "dark",
  sidePanelsColor: "#212121",
  mainColor: "#2D2D2D",
  searchBarColor: "rgba(52, 52, 52, 0.75)",
  wordColor: "linear-gradient(to top right, #353535, #484848)",
  mainFontColor: "white",
  secondFontColor: "BFBFBF",
});

export default themeContext;
