import { OrderByDirection } from "firebase/firestore";

export default interface searchTypes {
  searchPrompt: string;
  partOfSpeech: string;
  field: string;
  order: OrderByDirection;
}
