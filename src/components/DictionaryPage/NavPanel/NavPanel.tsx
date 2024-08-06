import styles from "./NavPanel.module.sass";
import { useContext } from "react";
import isOpenContext from "../../../context/isNavPanelOpenContext";
import themeContext from "../../../context/themeContext";
import NavBar from "./NavBar/NavBar";

const NavPanel = () => {
  const isOpenObject = useContext(isOpenContext);
  const {
    themeObject: { sidePanelsColor },
  } = useContext(themeContext);

  const inLineStyle = isOpenObject.isOpen
    ? { backgroundColor: sidePanelsColor, transform: "translateX(100%)" }
    : { backgroundColor: sidePanelsColor, transform: "translateX(0)" };

  return (
    <div className={styles.NavPanel} style={inLineStyle}>
      <NavBar></NavBar>
    </div>
  );
};

export default NavPanel;
