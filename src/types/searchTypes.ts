import { OrderByDirection } from "firebase/firestore";
import wordTypes from "./wordTypes";

export default interface searchTypes {
  searchPrompt: string;
  partOfSpeech: string;
  field: keyof wordTypes;
  order: OrderByDirection;
  isRankSearchActive: boolean;
  isLemmaSearchActive: boolean;
  isRomajiSearchActive: boolean;
  isEnglishSearchActive: boolean;
}
