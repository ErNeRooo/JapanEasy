import styles from "./SettingsPanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isSettingsPanelOpenContext";

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
    ></div>
  );
};

export default SettingsPanel;
