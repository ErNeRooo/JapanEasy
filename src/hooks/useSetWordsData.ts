import {
  collection,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  where,
} from "firebase/firestore";
import { useContext, useState } from "react";
import wordTypes from "../types/wordTypes";
import { db } from "../firebaseConfig";
import searchContext from "../context/searchContext";
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
      const filterOperator = order === "asc" ? ">" : "<";
      const wordsQuery =
        partOfSpeech === ""
          ? query(
              collection(db, "words"),
              orderBy(field, order),
              where("Rank", filterOperator, countSeeMoreTriggers * 50),
              limit(50)
            )
          : query(
              collection(db, "words"),
              orderBy(field, order),
              where("Rank", filterOperator, countSeeMoreTriggers * 50),
              where("PartOfSpeech", "==", partOfSpeech),
              limit(50)
            );

      getWords(wordsQuery).then((wordsArray) => {
        setWords((prev): wordTypes[] => [...prev, ...wordsArray]);
        countSeeMoreTriggers++;
      });
    } else {
      const wordsQuery = query(
        collection(db, "words"),
        orderBy(field, order),
        where("Romaji", "==", searchPrompt),
        limit(50)
      );

      getWords(wordsQuery).then((wordsArray) => {
        setWords(wordsArray);
      });
    }
  };

  const getWords = async (wordsQuery: Query): Promise<wordTypes[]> => {
    return new Promise<wordTypes[]>((resolve, reject) => {
      const wordsArray: wordTypes[] = [];

      getDocs(wordsQuery)
        .then((snapshot) => {
          if (snapshot.empty) {
            reject();
            throw new Error("No documents found");
          }

          snapshot.forEach((doc) => {
            wordsArray.push({
              Rank: doc.data().Rank,
              Lemma: doc.data().Lemma,
              Romaji: doc.data().Romaji,
              PartOfSpeech: doc.data().PartOfSpeech,
              EnglishGloss: doc.data().EnglishGloss,
            });
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
