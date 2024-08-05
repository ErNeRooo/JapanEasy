import styles from "./ThemeBar.module.sass";
import Theme from "./Theme/Theme";

const ThemeBar = () => {
  return (
    <div className={styles.ThemeBar}>
      <Theme></Theme>
      <Theme></Theme>
    </div>
  );
};

export default ThemeBar;
