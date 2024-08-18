import { CSSProperties, useContext } from "react";
import styles from "./ContentContainer.module.sass";
import themeStateContext from "../../context/themeStateContext";
import wordTypes from "../../types/wordTypes";
import { useParams } from "react-router-dom";
import getWords from "../../utils/getWords";

const ContentContainer = () => {
  const [{ mainFontColor, sidePanelsColor }] = useContext(themeStateContext);
  const { wordRank } = useParams();

  if (wordRank === undefined) return;

  const word: wordTypes = getWords()[parseInt(wordRank) - 1];

  const contentContainerStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
  };

  return (
    <div className={styles.ContentContainer} style={contentContainerStyle}>
      {wordRank}. {word.Lemma}
    </div>
  );
};

export default ContentContainer;
