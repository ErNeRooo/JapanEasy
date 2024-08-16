import { useEffect, useState } from "react";
import wordTypes from "../types/wordTypes";
import searchTypes from "../types/searchTypes";
import dictionaryData from "../assets/dictionaryData.json";

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

  const setWordsData = (isSeeMore: boolean = false) => {
    const from =
      words.length % 50 === 0
        ? words.length
        : Math.trunc(words.length / 50) * 50;

    const to = from + 50;

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
      .slice(isSeeMore ? from : 0, isSeeMore ? to : 50);

    if (result.length === 0 && !isSeeMore) setErrorMessage("No words found");

    if (isSeeMore) {
      setWords((prev): wordTypes[] => [...prev, ...result]);
    } else {
      setWords([...result]);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setErrorMessage("");
    setWordsData();
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
