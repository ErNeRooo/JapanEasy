import { useContext } from "react";
import searchIcon from "../../../../assets/Search-Icon.svg";
import slidersIcon from "../../../../assets/sliders-icon.svg";
import styles from "./SearchBar.module.sass";
import themeContext from "../../../../context/themeContext";

export const SearchBar = () => {
  const { searchBarColor } = useContext(themeContext);

  const style = {
    background: searchBarColor,
  };

  return (
    <div className={styles.searchBar} style={style}>
      <div className={styles.searchIcon}>
        <img src={searchIcon} />
      </div>
      <hr />

      <input type="text" />

      <hr />
      <div className={styles.filter}>
        <img src={slidersIcon} />
      </div>
    </div>
  );
};
