import {
  collection,
  getDocs,
  limit,
  orderBy,
  Query,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import wordTypes from "../types/wordTypes";
import { db } from "../firebaseConfig";
import searchContext from "../context/searchContext";

let countSeeMoreTriggers = 0;
const useSetWordsData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [words, setWords] = useState<wordTypes[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [{ searchPrompt, partOfSpeech, field, order }] =
    useContext(searchContext);

  const setWordsData = () => {
    const wordsQuery =
      countSeeMoreTriggers === 0
        ? query(collection(db, "words"), orderBy("Rank", "asc"), limit(50))
        : query(
            collection(db, "words"),
            orderBy("Rank", "asc"),
            where("Rank", ">", countSeeMoreTriggers * 50),
            limit(50)
          );

    if (searchPrompt === "") {
      getWords(wordsQuery).then((wordsArray) => {
        setWords((prev) => [...prev, ...wordsArray]);
        countSeeMoreTriggers++;
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
  /*
  useEffect(() => {
    console.log(searchPrompt, " ", partOfSpeech, " ", field, " ", order);
    // eslint-disable-next-line
  }, [searchPrompt, partOfSpeech, field, order, words]);
*/
  return { words, setWordsData, isLoading, errorMessage };
};

export default useSetWordsData;
