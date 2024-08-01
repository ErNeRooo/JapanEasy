import searchIcon from "../../assets/Search-Icon.svg";
import slidersIcon from "../../assets/sliders-icon.svg";
import styles from "./NavBar.module.sass";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.searchBar}>
        <img src={searchIcon} />
        <input type="text" />
        <div className={styles.filter}>
          <img src={slidersIcon} />
        </div>
      </div>
    </div>
  );
};
