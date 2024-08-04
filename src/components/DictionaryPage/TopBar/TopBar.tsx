import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./TopBar.module.sass";
import sliders from "../../../assets/sliders-icon.svg";
import { PanelButton } from "./Panel/PanelButton";

export const TopBar = () => {
  return (
    <div className={styles.TopBar}>
      <PanelButton image={sliders}></PanelButton>
      <SearchBar></SearchBar>
      <PanelButton image={sliders}></PanelButton>
    </div>
  );
};
