import { CSSProperties, useContext } from "react";
import styles from "./SeeMoreButton.module.sass";
import themeStateContext from "../../../../context/themeStateContext";

const SeeMoreButton = ({ setWords }: Props) => {
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
  setWords: () => void;
}

export default SeeMoreButton;
