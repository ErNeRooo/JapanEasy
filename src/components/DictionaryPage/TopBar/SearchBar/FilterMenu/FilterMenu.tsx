import { CSSProperties, useContext } from "react";
import styles from "./FilterMenu.module.sass";
import themeContext from "../../../../../context/themeContext";
import PartOfSpeechSelect from "./PartOfSpeechSelect/PartOfSpeechSelect";

const FilterMenu = ({ isVisible }: IProps) => {
  const {
    themeObject: { mainFontColor, sidePanelsColor },
  } = useContext(themeContext);

  const FilterMenuStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? "1" : "0",
    transform:
      (isVisible ? "translateY(3rem)" : "translateY(2rem)") +
      "translateX(-40%)",
  };

  return (
    <div className={styles.FilterMenu} style={FilterMenuStyle}>
      <PartOfSpeechSelect></PartOfSpeechSelect>
    </div>
  );
};

interface IProps {
  isVisible: boolean;
}

export default FilterMenu;
