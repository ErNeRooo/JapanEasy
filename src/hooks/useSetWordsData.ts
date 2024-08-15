import { useCallback, useEffect, useState } from "react";
import wordTypes from "../types/wordTypes";
import searchTypes from "../types/searchTypes";
import dictionaryData from "../assets/dictionaryData.json";

let countSeeMoreTriggers = 1;
const useSetWordsData = ({
  searchPrompt,
  partOfSpeech,
  field,
  order,
}: searchTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [words, setWords] = useState<wordTypes[]>([]);

  const setWordsData = useCallback(() => {
    const result = getWords()
      .filter((word) => {
        if (partOfSpeech) {
          return word.PartOfSpeech.replace(",", "")
            .split(" ")
            .includes(partOfSpeech);
        } else {
          return word;
        }
      })
      .filter((word) => {
        if (searchPrompt) {
          return (
            word["Rank"].toString() === searchPrompt ||
            word["Romaji"].toLowerCase().includes(searchPrompt.toLowerCase()) ||
            word["Lemma"].toLowerCase().includes(searchPrompt.toLowerCase())
          );
        } else {
          return word;
        }
      })
      .sort((a, b) => {
        if (a[field] < b[field]) {
          return order === "asc" ? -1 : 1;
        }
        if (a[field] > b[field]) {
          return order === "asc" ? 1 : -1;
        }
        return 0;
      })
      .slice((countSeeMoreTriggers - 1) * 50, countSeeMoreTriggers * 50);

    if (countSeeMoreTriggers === 1) setWords(result);
    else setWords((prev): wordTypes[] => [...prev, ...result]);
    countSeeMoreTriggers++;

    setIsLoading(false);
  }, [searchPrompt, partOfSpeech, field, order]);

  useEffect(() => {
    setErrorMessage("");
    setWordsData();
    countSeeMoreTriggers = 1;
    if (words.length === 0) setErrorMessage("No words found");
  }, [setWordsData, words, setErrorMessage]);

  const getWords = (): wordTypes[] => {
    const wordsArray: wordTypes[] = [];

    dictionaryData.forEach((doc: wordTypes) => {
      wordsArray.push(doc);
    });

    return wordsArray;
  };

  return { words, setWordsData, isLoading, errorMessage };
};

export default useSetWordsData;
