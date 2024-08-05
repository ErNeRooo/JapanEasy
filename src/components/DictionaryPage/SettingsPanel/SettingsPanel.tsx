import styles from "./SettingsPanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isSettingsPanelOpenContext";
import ThemeBar from "./ThemeBar/ThemeBar";

const SettingsPanel = () => {
  const isOpenObject = useContext(isOpenContext);
  return (
    <div
      className={styles.SettingsPanel}
      style={
        isOpenObject.isOpen
          ? { transform: "translateX(-100%)" }
          : { transform: "translateX(0)" }
      }
    >
      <ThemeBar></ThemeBar>
    </div>
  );
};

export default SettingsPanel;
