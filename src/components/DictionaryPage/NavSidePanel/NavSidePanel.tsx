import styles from "./NavSidePanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isNavSidePanelOpenContext";

const NavSidePanel = () => {
  const isOpenObject = useContext(isOpenContext);
  return (
    <div
      className={styles.NavSidePanel}
      style={
        isOpenObject.isOpen
          ? { transform: "translateX(100%)" }
          : { transform: "translateX(0)" }
      }
    ></div>
  );
};

export default NavSidePanel;
