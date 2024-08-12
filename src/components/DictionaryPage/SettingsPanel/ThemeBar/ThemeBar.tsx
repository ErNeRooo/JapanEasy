import styles from "./ThemeBar.module.sass";
import Theme from "./Theme/Theme";
import themes from "../../../../assets/themes.json";
import { CSSProperties, useContext } from "react";
import themeContext from "../../../../context/themeStateContext";

const ThemeBar = () => {
  const [{ mainColor }] = useContext(themeContext);

  const themeBarStyle: CSSProperties = {
    background: mainColor,
  };

  return (
    <div className={styles.ThemeBar} style={themeBarStyle}>
      {themes.map(({ name, iconColor }) => {
        return <Theme name={name} backgroundColor={iconColor}></Theme>;
      })}
    </div>
  );
};

export default ThemeBar;
