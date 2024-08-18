import { SearchBar } from "./SearchBar/SearchBar";
import styles from "./TopBar.module.sass";
import { NavPanelButton } from "./NavPanelButton/NavPanelButton";
import { SettingsPanelButton } from "./SettingsPanelButton/SettingsPanelButton";
import NavPanel from "./NavPanel/NavPanel";
import SettingsPanel from "./SettingsPanel/SettingsPanel";

const TopBar = ({ isSearchBarVisible = true }: Props) => {
  return (
    <div className={styles.TopBar}>
      <NavPanelButton></NavPanelButton>
      {isSearchBarVisible && <SearchBar></SearchBar>}
      <SettingsPanelButton></SettingsPanelButton>
      <NavPanel></NavPanel>
      <SettingsPanel></SettingsPanel>
    </div>
  );
};
interface Props {
  isSearchBarVisible: boolean;
}
export default TopBar;
