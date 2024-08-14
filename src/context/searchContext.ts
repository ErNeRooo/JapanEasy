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
  },
  () => {},
]);

export default searchContext;
