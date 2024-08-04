import { useContext } from "react";
import isSettingsPanelOpenContext from "../../../../context/isSettingsPanelOpenContext";
import styles from "./SettingsPanelButton.module.sass";
import image from "../../../../assets/sliders-icon.svg";

export const SettingsPanelButton = () => {
  const isSettingsPanelOpenObject = useContext(isSettingsPanelOpenContext);

  const HandleOnClick = () => {
    isSettingsPanelOpenObject.setIsOpen(!isSettingsPanelOpenObject.isOpen);
  };

  return isSettingsPanelOpenObject.isOpen ? (
    <div
      className={styles.Panel + " " + styles.Clicked}
      onClick={HandleOnClick}
      style={{ transform: "rotate(180deg)" }}
    >
      <img src={image} />
    </div>
  ) : (
    <div className={styles.Panel} onClick={HandleOnClick}>
      <img src={image} />
    </div>
  );
};
