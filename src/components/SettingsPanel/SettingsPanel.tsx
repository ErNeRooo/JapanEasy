import styles from "./SettingsPanel.module.sass";
import { CSSProperties, useContext } from "react";
import isOpenContext from "../../context/isSettingsPanelOpenStateContext";
import ThemeBar from "./ThemeBar/ThemeBar";
import themeContext from "../../context/themeStateContext";

const SettingsPanel = () => {
  const [isOpen] = useContext(isOpenContext);
  const [{ sidePanelsColor }] = useContext(themeContext);

  const settingsPanelStyle: CSSProperties = isOpen
    ? { background: sidePanelsColor, transform: "translateX(-100%)" }
    : { background: sidePanelsColor, transform: "translateX(0)" };

  return (
    <div className={styles.SettingsPanel} style={settingsPanelStyle}>
      <ThemeBar></ThemeBar>
    </div>
  );
};

export default SettingsPanel;
