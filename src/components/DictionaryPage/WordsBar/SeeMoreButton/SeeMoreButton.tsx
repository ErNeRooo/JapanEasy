import { CSSProperties, useContext } from "react";
import styles from "./SeeMoreButton.module.sass";
import themeStateContext from "../../../../context/themeStateContext";
import wordsDataContext from "../../../../context/wordsDataContext";
import searchContext from "../../../../context/searchContext";

const SeeMoreButton = () => {
  const [{ wordColor, mainFontColor }] = useContext(themeStateContext);
  const [words, setWords] = useContext(wordsDataContext);
  const [{ searchPrompt }] = useContext(searchContext);

  const SeeMoreButtonStyle: CSSProperties = {
    background: wordColor,
  };

  const spanStyle: CSSProperties = {
    color: mainFontColor,
  };

  const handleClick = (): void => {
    setWords();
  };

  if (words.length >= 5000 || searchPrompt !== "") return;

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
