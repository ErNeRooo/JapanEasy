import styles from "./NavSidePanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isNavSidePanelOpenContext";

const NavSidePanel = () => {
  const isOpenObject = useContext(isOpenContext);
  return isOpenObject.isOpen ? (
    <div
      className={styles.NavSidePanel}
      style={{ transform: "translateX(0)" }}
    ></div>
  ) : (
    <div className={styles.NavSidePanel}></div>
  );
};

export default NavSidePanel;
