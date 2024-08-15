import { memo, useContext, CSSProperties } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";
import themeContext from "../../../context/themeStateContext";
import SeeMoreButton from "./SeeMoreButton/SeeMoreButton";
import wordsDataContext from "../../../context/wordsDataContext";

const WordsBar = memo(() => {
  const [{ mainFontColor }] = useContext(themeContext);
  const [words, , isLoading, errorMessage] = useContext(wordsDataContext);

  const loadingStyle: CSSProperties = {
    borderRightColor: mainFontColor,
  };

  const errorStyle: CSSProperties = {
    color: mainFontColor,
  };

  if (errorMessage) {
    return (
      <div className={styles.WordsBar}>
        <div className={styles.error} style={errorStyle}>
          {errorMessage}
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
      <SeeMoreButton />
    </div>
  );
});

export default WordsBar;
