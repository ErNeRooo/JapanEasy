import styles from "./Theme.module.sass";
import themes from "../../../../../assets/themes.json";
import { useContext } from "react";
import themeContext from "../../../../../context/themeContext";
import { themeTypes } from "../../../../../App";

const Theme = ({ name, backgroundColor }: IProps) => {
  const themeObject = useContext(themeContext);

  const handleOnClick = () => {
    const themeToChange: themeTypes | undefined = themes.find(
      (item) => item.name === name
    );

    if (themeToChange !== undefined) themeObject.setter(themeToChange);
  };

  return (
    <div
      className={styles.Theme}
      style={{ background: backgroundColor }}
      onClick={handleOnClick}
    ></div>
  );
};

interface IProps {
  name: string;
  backgroundColor: string;
}

export default Theme;
