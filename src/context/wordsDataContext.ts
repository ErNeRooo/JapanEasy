import { createContext } from "react";
import wordTypes from "../types/wordTypes";

const wordsDataContext = createContext<
  [wordTypes[], () => void, boolean, string]
>([[], () => {}, true, ""]);

export default wordsDataContext;
