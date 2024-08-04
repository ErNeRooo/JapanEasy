import searchIcon from "../../../../assets/Search-Icon.svg";
import slidersIcon from "../../../../assets/sliders-icon.svg";
import styles from "./SearchBar.module.sass";

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
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
