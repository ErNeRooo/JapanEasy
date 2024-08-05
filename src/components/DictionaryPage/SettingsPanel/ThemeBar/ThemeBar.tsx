import styles from "./ThemeBar.module.sass";
import Theme from "./Theme/Theme";
import themes from "../../../../assets/themes.json";

const ThemeBar = () => {
  return (
    <div className={styles.ThemeBar}>
      {themes.map(({ name, iconColor }) => {
        return <Theme name={name} backgroundColor={iconColor}></Theme>;
      })}
    </div>
  );
};

export default ThemeBar;
