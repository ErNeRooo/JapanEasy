import { useContext } from "react";
import isNavSidePanelOpenContext from "../../../../context/isNavSidePanelOpenContext";
import styles from "./NavSidePanelButton.module.sass";
import image from "../../../../assets/sliders-icon.svg";

export const PanelButton = () => {
  const isNavSidePanelOpenObject = useContext(isNavSidePanelOpenContext);

  const HandleOnClick = () => {
    isNavSidePanelOpenObject.setIsOpen(!isNavSidePanelOpenObject.isOpen);
  };

  return isNavSidePanelOpenObject.isOpen ? (
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
