import { createContext } from "react";
import searchTypes from "../types/searchTypes";

const searchContext = createContext<
  [searchTypes, (state: searchTypes) => void]
>([
  {
    searchPrompt: "",
    partOfSpeech: "",
    field: "Rank",
    order: "asc",
    isRankSearchActive: false,
    isLemmaSearchActive: true,
    isRomajiSearchActive: true,
    isEnglishSearchActive: false,
  },
  () => {},
]);

export default searchContext;
