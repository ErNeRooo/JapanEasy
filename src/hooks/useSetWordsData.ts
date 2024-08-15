import { useCallback, useEffect, useState } from "react";
import wordTypes from "../types/wordTypes";
import searchTypes from "../types/searchTypes";

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
    getWords().then((wordsArray) => {
      const result = wordsArray
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
              word["Romaji"]
                .toLowerCase()
                .includes(searchPrompt.toLowerCase()) ||
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
    });
  }, [searchPrompt, partOfSpeech, field, order]);

  useEffect(() => {
    setWordsData();
    countSeeMoreTriggers = 1;
  }, [setWordsData]);

  const getWords = async (): Promise<wordTypes[]> => {
    return new Promise<wordTypes[]>((resolve, reject) => {
      const wordsArray: wordTypes[] = [];

      fetch("../../public/dictionaryData.json")
        .then((response) => response.json())
        .then((data) => {
          if (data.length === 0) {
            reject();
            throw new Error("No documents found");
          }

          data.forEach((doc: wordTypes) => {
            wordsArray.push(doc);
          });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        })
        .finally(() => {
          setIsLoading(false);
          resolve(wordsArray);
        });
    });
  };

  return { words, setWordsData, isLoading, errorMessage };
};

export default useSetWordsData;
