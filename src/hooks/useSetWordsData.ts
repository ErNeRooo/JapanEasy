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
  isRankSearchActive,
  isLemmaSearchActive,
  isRomajiSearchActive,
  isEnglishSearchActive,
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
            (isRankSearchActive && word["Rank"].toString() === searchPrompt) ||
            (isRomajiSearchActive &&
              word["Romaji"]
                .toLowerCase()
                .includes(searchPrompt.toLowerCase())) ||
            (isLemmaSearchActive &&
              word["Lemma"]
                .toLowerCase()
                .includes(searchPrompt.toLowerCase())) ||
            (isEnglishSearchActive &&
              word["EnglishGloss"]
                .toLowerCase()
                .includes(searchPrompt.toLowerCase()))
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

    if (result.length === 0) setErrorMessage("No words found");

    if (countSeeMoreTriggers === 1) setWords(result);
    else setWords((prev): wordTypes[] => [...prev, ...result]);
    countSeeMoreTriggers++;

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    searchPrompt,
    partOfSpeech,
    field,
    order,
    isRankSearchActive,
    isLemmaSearchActive,
    isRomajiSearchActive,
    isEnglishSearchActive,
  ]);

  useEffect(() => {
    setErrorMessage("");
    setWordsData();
    countSeeMoreTriggers = 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setWordsData]);

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
