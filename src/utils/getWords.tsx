import wordTypes from "../types/wordTypes";
import dictionaryData from "../assets/dictionaryData.json";

const getWords = (): wordTypes[] => {
  const wordsArray: wordTypes[] = [];

  dictionaryData.forEach((doc: wordTypes) => {
    wordsArray.push(doc);
  });

  return wordsArray;
};

export default getWords;
