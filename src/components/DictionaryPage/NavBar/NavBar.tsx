import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./NavBar.module.sass";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <SearchBar></SearchBar>
    </div>
  );
};
