import { CSSProperties, useContext } from "react";
import styles from "./SeeMoreButton.module.sass";
import themeStateContext from "../../../../context/themeStateContext";
import wordsDataContext from "../../../../context/wordsDataContext";

const SeeMoreButton = () => {
  const [{ wordColor, mainFontColor }] = useContext(themeStateContext);
  const [words, setWords] = useContext(wordsDataContext);

  const SeeMoreButtonStyle: CSSProperties = {
    background: wordColor,
  };

  const spanStyle: CSSProperties = {
    color: mainFontColor,
  };

  const handleClick = (): void => {
    setWords(true);
  };

  if (words.length >= 5000 || words.length < 50) return;

  return (
    <div
      className={styles.SeeMoreButton}
      style={SeeMoreButtonStyle}
      onClick={handleClick}
    >
      <span style={spanStyle}>See More</span>
    </div>
  );
};

export default SeeMoreButton;
