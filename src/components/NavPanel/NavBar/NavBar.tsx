import { CSSProperties, useContext } from "react";
import styles from "./NavBar.module.sass";
import themeContext from "../../../context/themeStateContext";
import LinkButton from "./LinkButton/LinkButton";
import linkListTypes from "../../../types/linkListTypes";

const linkList: linkListTypes[] = [{ name: "Home" }, { name: "About" }];

const NavBar = () => {
  const [{ secondColor }] = useContext(themeContext);

  const navBarStyle: CSSProperties = {
    background: secondColor,
  };

  return (
    <div className={styles.NavBar} style={navBarStyle}>
      {linkList.map(({ name }, index) => {
        return <LinkButton key={name + index}>{name}</LinkButton>;
      })}
    </div>
  );
};

export default NavBar;
