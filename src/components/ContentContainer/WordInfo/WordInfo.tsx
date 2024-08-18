import { CSSProperties, useContext } from "react";
import themeStateContext from "../../../context/themeStateContext";
import wordTypes from "../../../types/wordTypes";
import styles from "./WordInfo.module.sass";

const WordInfo = ({ word: { Lemma } }: Props) => {
  const [{ mainFontColor, sidePanelsColor }] = useContext(themeStateContext);
  const wordInfoStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
  };
  return (
    <div className={styles.WordInfo} style={wordInfoStyle}>
      <h1>{Lemma}</h1>
    </div>
  );
};

interface Props {
  word: wordTypes;
}

export default WordInfo;
