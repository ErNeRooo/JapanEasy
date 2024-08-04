import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./NavBar.module.sass";
import sliders from "../../../assets/sliders-icon.svg";
import { PanelButton } from "./Panel/PanelButton";

export const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <PanelButton image={sliders}></PanelButton>
      <SearchBar></SearchBar>
      <PanelButton image={sliders}></PanelButton>
    </div>
  );
};
