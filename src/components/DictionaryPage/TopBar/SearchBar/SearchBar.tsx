import { useContext, useState } from "react";
import searchIcon from "../../../../assets/Search-Icon.svg";
import slidersIcon from "../../../../assets/sliders-icon.svg";
import styles from "./SearchBar.module.sass";
import themeContext from "../../../../context/themeContext";
import FilterMenu from "./FilterMenu/FilterMenu";

export const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const {
    themeObject: { searchBarColor, iconsColor, lineColor, mainFontColor },
  } = useContext(themeContext);

  const background = {
    background: searchBarColor,
  };
  const searchIconStyle = {
    filter: iconsColor,
  };
  const filterIconStyle = {
    filter: iconsColor,
    transform:
      (isVisible ? "scale(1.5)" : "") +
      (isHover ? "rotate(0deg)" : "rotate(180deg)"),
  };
  const lineStyle = {
    borderLeft: "1px solid " + lineColor,
  };
  const inputStyle = {
    color: mainFontColor,
  };

  return (
    <div className={styles.searchBar} style={background}>
      <div className={styles.searchIcon}>
        <img src={searchIcon} style={searchIconStyle} />
      </div>
      <hr style={lineStyle} />

      <input type="text" style={inputStyle} maxLength={150} />

      <hr style={lineStyle} />
      <div className={styles.filterContainer}>
        <div
          className={styles.filter}
          onClick={() => setIsVisible(!isVisible)}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <img src={slidersIcon} style={filterIconStyle} />
        </div>
        <FilterMenu isVisible={isVisible}></FilterMenu>
      </div>
    </div>
  );
};
