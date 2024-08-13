import { CSSProperties, useContext, useState } from "react";
import searchIcon from "../../../../assets/Search-Icon.svg";
import slidersIcon from "../../../../assets/sliders-icon.svg";
import styles from "./SearchBar.module.sass";
import themeContext from "../../../../context/themeStateContext";
import FilterMenu from "./FilterMenu/FilterMenu";

export const SearchBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [{ searchBarColor, iconsColor, lineColor, mainFontColor }] =
    useContext(themeContext);

  const backgroundStyle: CSSProperties = {
    background: searchBarColor,
  };
  const searchIconStyle: CSSProperties = {
    filter: iconsColor,
  };
  const filterIconStyle: CSSProperties = {
    filter: iconsColor,
    transform:
      (isVisible ? "scale(1.5)" : "") +
      (isHover ? "rotate(0deg)" : "rotate(180deg)"),
  };
  const lineStyle: CSSProperties = {
    border: "1px solid " + lineColor,
  };
  const inputStyle: CSSProperties = {
    color: mainFontColor,
  };

  return (
    <div className={styles.searchBar} style={backgroundStyle}>
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
