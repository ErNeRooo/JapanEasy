import { useContext } from "react";
import searchIcon from "../../../../assets/Search-Icon.svg";
import slidersIcon from "../../../../assets/sliders-icon.svg";
import styles from "./SearchBar.module.sass";
import themeContext from "../../../../context/themeContext";

export const SearchBar = () => {
  const {
    themeObject: { searchBarColor, iconsColor, lineColor, mainFontColor },
  } = useContext(themeContext);

  const background = {
    background: searchBarColor,
  };
  const imageStyle = {
    filter: iconsColor,
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
        <img src={searchIcon} style={imageStyle} />
      </div>
      <hr style={lineStyle} />

      <input type="text" style={inputStyle} />

      <hr style={lineStyle} />
      <div className={styles.filter}>
        <img src={slidersIcon} style={imageStyle} />
      </div>
    </div>
  );
};
