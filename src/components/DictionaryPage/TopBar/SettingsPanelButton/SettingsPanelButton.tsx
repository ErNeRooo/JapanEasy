import { useContext } from "react";
import isSettingsPanelOpenContext from "../../../../context/isSettingsPanelOpenContext";
import styles from "./SettingsPanelButton.module.sass";
import image from "../../../../assets/menu.svg";
import themeContext from "../../../../context/themeContext";

export const SettingsPanelButton = () => {
  const isSettingsPanelOpenObject = useContext(isSettingsPanelOpenContext);
  const {
    themeObject: { iconsColor },
  } = useContext(themeContext);

  const HandleOnClick = () => {
    isSettingsPanelOpenObject.setIsOpen(!isSettingsPanelOpenObject.isOpen);
  };

  const style = {
    filter: iconsColor,
  };

  return isSettingsPanelOpenObject.isOpen ? (
    <div
      className={styles.Panel + " " + styles.Clicked}
      onClick={HandleOnClick}
      style={{ transform: "rotate(180deg)" }}
    >
      <img src={image} style={style} />
    </div>
  ) : (
    <div className={styles.Panel} onClick={HandleOnClick}>
      <img src={image} style={style} />
    </div>
  );
};
