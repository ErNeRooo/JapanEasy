import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./TopBar.module.sass";
import { PanelButton } from "./Panel/NavSidePanelButton";

export const TopBar = () => {
  return (
    <div className={styles.TopBar}>
      <PanelButton></PanelButton>
      <SearchBar></SearchBar>
    </div>
  );
};
