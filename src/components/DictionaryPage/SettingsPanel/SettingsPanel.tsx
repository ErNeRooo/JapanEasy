import styles from "./SettingsPanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isSettingsPanelOpenContext";
import ThemeBar from "./ThemeBar/ThemeBar";
import themeContext from "../../../context/themeContext";

const SettingsPanel = () => {
  const isOpenObject = useContext(isOpenContext);
  const {
    themeObject: { sidePanelsColor },
  } = useContext(themeContext);

  const style = isOpenObject.isOpen
    ? { background: sidePanelsColor, transform: "translateX(-100%)" }
    : { background: sidePanelsColor, transform: "translateX(0)" };

  return (
    <div className={styles.SettingsPanel} style={style}>
      <ThemeBar></ThemeBar>
    </div>
  );
};

export default SettingsPanel;
