import { CSSProperties, useContext } from "react";
import styles from "./FilterMenu.module.sass";
import themeContext from "../../../../../context/themeContext";
import PartOfSpeechSelect from "./PartOfSpeechSelect/PartOfSpeechSelect";
import SortSelect from "./SortSelect/SortSelect";

const FilterMenu = ({ isVisible }: IProps) => {
  const {
    themeObject: { mainFontColor, sidePanelsColor },
  } = useContext(themeContext);

  const FilterMenuStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? "1" : "0",
    pointerEvents: isVisible ? "auto" : "none",
    transform:
      (isVisible ? "translateY(3rem)" : "translateY(2rem)") +
      "translateX(-40%)",
  };

  return (
    <div className={styles.FilterMenu} style={FilterMenuStyle}>
      <div className={styles.line}>
        <span className={styles.title}>Filter</span>
      </div>
      <div className={styles.line}>
        <PartOfSpeechSelect></PartOfSpeechSelect>
      </div>
      <div className={styles.line}>
        <span className={styles.title}>Sort</span>
      </div>
      <div className={styles.line}>
        <SortSelect></SortSelect>
      </div>
    </div>
  );
};

interface IProps {
  isVisible: boolean;
}

export default FilterMenu;
