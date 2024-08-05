import { useContext } from "react";
import isNavPanelOpenContext from "../../../../context/isNavPanelOpenContext";
import styles from "./NavPanelButton.module.sass";
import image from "../../../../assets/menu.svg";
import themeContext from "../../../../context/themeContext";

export const NavPanelButton = () => {
  const isNavPanelOpenObject = useContext(isNavPanelOpenContext);
  const {
    themeObject: { iconsColor },
  } = useContext(themeContext);

  const HandleOnClick = () => {
    isNavPanelOpenObject.setIsOpen(!isNavPanelOpenObject.isOpen);
  };

  const style = {
    filter: iconsColor,
  };

  return isNavPanelOpenObject.isOpen ? (
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
