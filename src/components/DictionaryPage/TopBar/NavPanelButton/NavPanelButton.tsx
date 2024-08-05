import { useContext } from "react";
import isNavPanelOpenContext from "../../../../context/isNavPanelOpenContext";
import styles from "./NavPanelButton.module.sass";
import image from "../../../../assets/menu.svg";

export const NavPanelButton = () => {
  const isNavPanelOpenObject = useContext(isNavPanelOpenContext);

  const HandleOnClick = () => {
    isNavPanelOpenObject.setIsOpen(!isNavPanelOpenObject.isOpen);
  };

  return isNavPanelOpenObject.isOpen ? (
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
