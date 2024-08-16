import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./TopBar.module.sass";
import { NavPanelButton } from "./NavPanelButton/NavPanelButton";
import { SettingsPanelButton } from "./SettingsPanelButton/SettingsPanelButton";

export const TopBar = () => {
  return (
    <div className={styles.TopBar}>
      <NavPanelButton></NavPanelButton>
      <SearchBar></SearchBar>
      <SettingsPanelButton></SettingsPanelButton>
    </div>
  );
};
