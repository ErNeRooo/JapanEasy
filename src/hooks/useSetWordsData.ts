import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import wordTypes from "../types/wordTypes";
import { db } from "../firebaseConfig";
import searchContext from "../context/searchContext";

const useSetWordsData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [words, setWords] = useState<wordTypes[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [{ searchPrompt, partOfSpeech, field, order }] =
    useContext(searchContext);
  let countSetWordsDataTriggers = 0;

  const setWordsData = useCallback(() => {
    const wordsDataQuery =
      countSetWordsDataTriggers === 0
        ? query(collection(db, "wordss"), orderBy("Rank", "asc"), limit(50))
        : query(
            collection(db, "words"),
            orderBy("Rank", "asc"),
            where("Rank", ">", countSetWordsDataTriggers * 50),
            limit(50)
          );

    getDocs(wordsDataQuery)
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("No documents found");
        }

        const wordsDataArray: wordTypes[] = [];

        snapshot.forEach((doc) => {
          wordsDataArray.push({
            Rank: doc.data().Rank,
            Lemma: doc.data().Lemma,
            Romaji: doc.data().Romaji,
            PartOfSpeech: doc.data().PartOfSpeech,
            EnglishGloss: doc.data().EnglishGloss,
          });
        });

        setIsLoading(false);
        setWords((prev) => [...prev, ...wordsDataArray]);
        countSetWordsDataTriggers++;
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(searchPrompt, " ", partOfSpeech, " ", field, " ", order);
    // eslint-disable-next-line
  }, [searchPrompt, partOfSpeech, field, order]);

  return { words, setWordsData, isLoading, errorMessage };
};

export default useSetWordsData;
