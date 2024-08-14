import { memo, useContext, CSSProperties, useEffect } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";
import themeContext from "../../../context/themeStateContext";
import useSetWordsData from "../../../hooks/useSetWordsData";
import SeeMoreButton from "./SeeMoreButton/SeeMoreButton";

const WordsBar = memo(() => {
  const [{ mainFontColor }] = useContext(themeContext);
  const { words, setWordsData, isLoading, errorMessage } = useSetWordsData();

  const loadingStyle: CSSProperties = {
    borderRightColor: mainFontColor,
  };

  const errorStyle: CSSProperties = {
    color: mainFontColor,
  };

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  if (errorMessage) {
    console.log(errorMessage);

    return (
      <div className={styles.WordsBar}>
        <div className={styles.error} style={errorStyle}>
          {errorMessage === "Quota exceeded."
            ? "Too many requests. Please try again later."
            : errorMessage}
          <span>:/</span>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.WordsBar}>
        <div className={styles.loader} style={loadingStyle}></div>
      </div>
    );
  }

  return (
    <div className={styles.WordsBar}>
      {words.map(
        ({ Rank, Lemma, Romaji, PartOfSpeech, EnglishGloss }, index) => (
          <Word
            Rank={Rank}
            Lemma={Lemma}
            Romaji={Romaji}
            PartOfSpeech={PartOfSpeech}
            EnglishGloss={EnglishGloss}
            key={index + Romaji}
          />
        )
      )}
      <SeeMoreButton words={words} setWords={setWordsData} />
    </div>
  );
});

export default WordsBar;
