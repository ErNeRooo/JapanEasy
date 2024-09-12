import { CSSProperties, useContext } from "react";
import styles from "./NavBar.module.sass";
import themeContext from "../../../../context/themeStateContext";
import LinkButton from "./LinkButton/LinkButton";
import linkListTypes from "../../../../types/linkListTypes";
import { Link } from "react-router-dom";

const linkList: linkListTypes[] = [
  { name: "Kana", path: "/kana" },
  { name: "Dictionary", path: "/" },
];

const NavBar = () => {
  const [{ secondColor }] = useContext(themeContext);

  const navBarStyle: CSSProperties = {
    background: secondColor,
  };

  const LinkStyle: CSSProperties = {
    all: "unset",
    height: "100%",
    width: "100%",
  };

  return (
    <div className={styles.NavBar} style={navBarStyle}>
      {linkList.map(({ name, path }, index) => {
        return (
          <Link to={path} style={LinkStyle}>
            <LinkButton key={name + index}>{name}</LinkButton>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
