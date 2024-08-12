import { memo, useEffect, useState, useContext } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import themeContext from "../../../context/themeContext";
import wordTypes from "../../../types/wordTypes";

const WordsBar = memo(() => {
  const [words, setWords] = useState<wordTypes[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const {
    themeObject: { mainFontColor },
  } = useContext(themeContext);

  useEffect(() => {
    const wordsQuery = query(
      collection(db, "words"),
      orderBy("Rank", "asc"),
      limit(50)
    );

    getDocs(wordsQuery).then((snapshot) => {
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
    });
  }, []);

  const loadingStyle = {
    borderRightColor: mainFontColor,
  };

  if (isLoading) {
    return (
      <div className={styles.WordsBar}>
        <div className={styles.loader} style={loadingStyle}></div>
      </div>
    );
  }

  return (
    <div className={styles.WordsBar}>
      {words.map(({ Rank, Lemma, Romaji, PartOfSpeech, EnglishGloss }) => (
        <Word
          Rank={Rank}
          Lemma={Lemma}
          Romaji={Romaji}
          PartOfSpeech={PartOfSpeech}
          EnglishGloss={EnglishGloss}
        />
      ))}
    </div>
  );
});

export default WordsBar;
