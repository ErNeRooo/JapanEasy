import { CSSProperties, useContext } from "react";
import isSettingsPanelOpenStateContext from "../../../../context/isSettingsPanelOpenStateContext";
import styles from "./SettingsPanelButton.module.sass";
import image from "../../../../assets/menu.svg";
import themeContext from "../../../../context/themeStateContext";

export const SettingsPanelButton = () => {
  const [isOpen, setIsOpen] = useContext(isSettingsPanelOpenStateContext);
  const [{ iconsColor }] = useContext(themeContext);

  const imgStyle: CSSProperties = {
    filter: iconsColor,
  };

  return isOpen ? (
    <div
      className={styles.Panel + " " + styles.Clicked}
      onClick={() => setIsOpen(!isOpen)}
      style={{ transform: "rotate(180deg)" }}
    >
      <img src={image} style={imgStyle} />
    </div>
  ) : (
    <div className={styles.Panel} onClick={() => setIsOpen(!isOpen)}>
      <img src={image} style={imgStyle} />
    </div>
  );
};
