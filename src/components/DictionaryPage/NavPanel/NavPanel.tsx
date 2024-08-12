import styles from "./NavPanel.module.sass";
import { CSSProperties, useContext } from "react";
import isOpenContext from "../../../context/isNavPanelOpenStateContext";
import themeContext from "../../../context/themeStateContext";
import NavBar from "./NavBar/NavBar";

const NavPanel = () => {
  const [isOpen] = useContext(isOpenContext);
  const [{ sidePanelsColor }] = useContext(themeContext);

  const inLineStyle: CSSProperties = isOpen
    ? { backgroundColor: sidePanelsColor, transform: "translateX(100%)" }
    : { backgroundColor: sidePanelsColor, transform: "translateX(0)" };

  return (
    <div className={styles.NavPanel} style={inLineStyle}>
      <NavBar></NavBar>
    </div>
  );
};

export default NavPanel;
