import { CSSProperties, useContext } from "react";
import isNavPanelOpenContext from "../../../context/isNavPanelOpenStateContext";
import styles from "./NavPanelButton.module.sass";
import image from "../../../assets/menu.svg";
import themeContext from "../../../context/themeStateContext";

export const NavPanelButton = () => {
  const [isOpen, setIsOpen] = useContext(isNavPanelOpenContext);
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
