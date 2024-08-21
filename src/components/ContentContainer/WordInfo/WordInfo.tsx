import { CSSProperties, useContext } from "react";
import themeStateContext from "../../../context/themeStateContext";
import wordTypes from "../../../types/wordTypes";
import styles from "./WordInfo.module.sass";
import Info from "./Info/Info";

const WordInfo = ({ word: { Rank, Lemma, Romaji, PartOfSpeech } }: Props) => {
  const [{ mainFontColor, sidePanelsColor }] = useContext(themeStateContext);
  const wordInfoStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
  };
  return (
    <div className={styles.WordInfo} style={wordInfoStyle}>
      <div className={styles.line}>
        <h1>{Lemma}</h1>
      </div>
      <div className={styles.line}>
        <Info name="Rank" value={Rank} />
        <Info name="Romaji" value={Romaji} />
        <Info name="Part of Speech" value={PartOfSpeech} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

interface Props {
  word: wordTypes;
}

export default WordInfo;
