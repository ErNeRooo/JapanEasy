import { useContext } from "react";
import styles from "./NavBar.module.sass";
import themeContext from "../../../../context/themeContext";
import LinkButton from "./Link/LinkButton";

const linkList: linkListTypes[] = [{ name: "Home" }, { name: "About" }];

interface linkListTypes {
  name: string;
}

const NavBar = () => {
  const {
    themeObject: { secondColor },
  } = useContext(themeContext);

  const style = {
    background: secondColor,
  };

  return (
    <div className={styles.NavBar} style={style}>
      {linkList.map(({ name }) => {
        return <LinkButton>{name}</LinkButton>;
      })}
    </div>
  );
};

export default NavBar;
