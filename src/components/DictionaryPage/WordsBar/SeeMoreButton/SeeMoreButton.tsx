import { CSSProperties, useContext } from "react";
import styles from "./SeeMoreButton.module.sass";
import themeStateContext from "../../../../context/themeStateContext";
import wordTypes from "../../../../types/wordTypes";

const SeeMoreButton = ({ words, setWords }: Props) => {
  const [{ wordColor, mainFontColor }] = useContext(themeStateContext);

  const SeeMoreButtonStyle: CSSProperties = {
    background: wordColor,
  };

  const spanStyle: CSSProperties = {
    color: mainFontColor,
  };

  const handleClick = (): void => {
    setWords();
  };

  if (words.length >= 5000) return;

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

interface Props {
  words: wordTypes[];
  setWords: () => void;
}

export default SeeMoreButton;
