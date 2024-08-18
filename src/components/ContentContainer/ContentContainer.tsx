import styles from "./ContentContainer.module.sass";
import wordTypes from "../../types/wordTypes";
import { useParams } from "react-router-dom";
import getWords from "../../utils/getWords";
import WordInfo from "./WordInfo/WordInfo";

const ContentContainer = () => {
  const { wordRank } = useParams();

  if (wordRank === undefined) return;

  const word: wordTypes = getWords()[parseInt(wordRank) - 1];

  return (
    <div className={styles.ContentContainer}>
      <WordInfo word={word} />
    </div>
  );
};

export default ContentContainer;
