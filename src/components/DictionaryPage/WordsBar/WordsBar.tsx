import { useEffect, useState } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";
//import { collection, getDocs } from "firebase/firestore";
//import { db } from "../../../firebaseConfig";

export const WordsBar = () => {
  const [words, setWords] = useState<wordTypes[]>();

  useEffect(() => {
    /*
    const collectionReference = collection(db, "words");

    getDocs(collectionReference).then((snapshot) => {
      const words: wordTypes[] = [];

      snapshot.forEach((doc) => {
        words.push({
          Rank: doc.data().FrequencyNumber,
          name: doc.data().Name,
          romaji: doc.data().Romaji,
          partOfSpeech: doc.data().PartOfSpeech,
          definition: doc.data().Definition,
        });
      });

      words.sort((a, b) => a.Rank - b.Rank);

      setWords(words);
      */
    fetch("./dictionaryData.json")
      .then((res) => res.json())
      .then((data) => {
        const limitedData: wordTypes[] = [];

        for (let i = 0; i < 50; i++) {
          limitedData.push(data[i]);
        }

        setWords(limitedData);
      })
      .catch((error) => {
        console.log("Pozdro: " + error);
      });
  }, []);

  return (
    <div className={styles.WordsBar}>
      {words !== undefined ? (
        words.map(({ Rank, Lemma, Romaji, PartOfSpeech, EnglishGloss }) => (
          <Word
            Rank={Rank}
            Lemma={Lemma}
            Romaji={Romaji}
            PartOfSpeech={PartOfSpeech}
            EnglishGloss={EnglishGloss}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

interface wordTypes {
  Rank: number;
  Lemma: string;
  Romaji: string;
  PartOfSpeech: string;
  EnglishGloss: string;
}
