import styles from "./NavPanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isNavPanelOpenContext";

const NavPanel = () => {
  const isOpenObject = useContext(isOpenContext);
  return (
    <div
      className={styles.NavPanel}
      style={
        isOpenObject.isOpen
          ? { transform: "translateX(100%)" }
          : { transform: "translateX(0)" }
      }
    ></div>
  );
};

export default NavPanel;
