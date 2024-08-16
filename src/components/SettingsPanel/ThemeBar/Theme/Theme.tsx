import styles from "./Theme.module.sass";
import themes from "../../../../assets/themes.json";
import { useContext } from "react";
import themeContext from "../../../../context/themeStateContext";
import themeTypes from "../../../../types/themeTypes";

const Theme = ({ name, backgroundColor }: Props) => {
  const [, setTheme] = useContext(themeContext);

  const handleOnClick = () => {
    const themeToChange: themeTypes | undefined = themes.find(
      (item) => item.name === name
    );

    if (themeToChange !== undefined) setTheme(themeToChange);
  };

  return (
    <div
      className={styles.Theme}
      style={{ background: backgroundColor }}
      onClick={handleOnClick}
    ></div>
  );
};

interface Props {
  name: string;
  backgroundColor: string;
}

export default Theme;
