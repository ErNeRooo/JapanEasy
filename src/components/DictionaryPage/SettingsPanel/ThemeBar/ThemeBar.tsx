import styles from "./ThemeBar.module.sass";
import Theme from "./Theme/Theme";
import themes from "../../../../assets/themes.json";
import { useContext } from "react";
import themeContext from "../../../../context/themeContext";

const ThemeBar = () => {
  const { mainColor } = useContext(themeContext);

  const style = {
    background: mainColor,
  };

  return (
    <div className={styles.ThemeBar} style={style}>
      {themes.map(({ name, iconColor }) => {
        return <Theme name={name} backgroundColor={iconColor}></Theme>;
      })}
    </div>
  );
};

export default ThemeBar;
