import { CSSProperties, useContext } from "react";
import styles from "./FilterMenu.module.sass";
import themeContext from "../../../../../context/themeContext";
import PartOfSpeechSelect from "./PartOfSpeechSelect/PartOfSpeechSelect";
import SortFieldSelect from "./SortSelect/SortFieldSelect";
import SortOrderBySelect from "./SortOrderBySelect/SortOrderBySelect";

const FilterMenu = ({ isVisible }: IProps) => {
  const {
    themeObject: { mainFontColor, secondFontColor, sidePanelsColor },
  } = useContext(themeContext);

  const FilterMenuStyle: CSSProperties = {
    background: sidePanelsColor,
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? "1" : "0",
    pointerEvents: isVisible ? "auto" : "none",
    transform:
      (isVisible ? "translateY(3rem)" : "translateY(2rem)") +
      "translateX(-40%)",
  };

  const titleStyle: CSSProperties = {
    color: mainFontColor,
  };

  const subTitleStyle: CSSProperties = {
    color: secondFontColor,
  };

  const filterPropertyStyle: CSSProperties = {
    color: secondFontColor,
  };

  return (
    <div className={styles.FilterMenu} style={FilterMenuStyle}>
      <div className={styles.line}>
        <span className={styles.title} style={titleStyle}>
          Filter
        </span>
      </div>
      <div className={styles.line}>
        <span style={filterPropertyStyle}>Part Of Speech </span>
      </div>
      <div className={styles.line}>
        <PartOfSpeechSelect></PartOfSpeechSelect>
      </div>
      <div className={styles.line}>
        <span className={styles.title} style={titleStyle}>
          Sort
        </span>
      </div>
      <div className={styles.line}>
        <span style={subTitleStyle}>Field</span>
      </div>
      <div className={styles.line}>
        <SortFieldSelect></SortFieldSelect>
      </div>
      <div className={styles.line}>
        <span style={subTitleStyle}>Order</span>
      </div>
      <div className={styles.line}>
        <SortOrderBySelect></SortOrderBySelect>
      </div>
    </div>
  );
};

interface IProps {
  isVisible: boolean;
}

export default FilterMenu;
