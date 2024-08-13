import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import wordTypes from "../types/wordTypes";
import { db } from "../firebaseConfig";

const useGetData = () => {
  const [words, setWords] = useState<wordTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let isCancelled = false;

    const wordsQuery = query(
      collection(db, "words"),
      orderBy("Rank", "asc"),
      limit(50)
    );

    getDocs(wordsQuery)
      .then((snapshot) => {
        if (snapshot.empty) {
          throw new Error("No documents found");
        }
        if (isCancelled) {
          throw new Error("Cancelled");
        }

        const wordsArray: wordTypes[] = [];

        snapshot.forEach((doc) => {
          wordsArray.push({
            Rank: doc.data().Rank,
            Lemma: doc.data().Lemma,
            Romaji: doc.data().Romaji,
            PartOfSpeech: doc.data().PartOfSpeech,
            EnglishGloss: doc.data().EnglishGloss,
          });
        });

        wordsArray.sort((a, b) => a.Rank - b.Rank);

        setWords(wordsArray);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return { words, isLoading, error };
};

export default useGetData;
