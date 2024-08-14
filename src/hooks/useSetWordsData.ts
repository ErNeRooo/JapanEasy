import { useState } from "react";
import wordTypes from "../types/wordTypes";
import searchTypes from "../types/searchTypes";

let countSeeMoreTriggers = 0;
const useSetWordsData = ({
  searchPrompt,
  partOfSpeech,
  field,
  order,
}: searchTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [words, setWords] = useState<wordTypes[]>([]);

  const setWordsData = () => {
    if (searchPrompt === "") {
      getWords().then((wordsArray) => {
        setWords((prev): wordTypes[] => [...prev, ...wordsArray]);
        countSeeMoreTriggers++;
      });
    } else {
      getWords().then((wordsArray) => {
        setWords(wordsArray);
      });
    }
  };

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
