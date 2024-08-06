import { useContext } from "react";
import styles from "./LinkButton.module.sass";
import themeContext from "../../../../../context/themeContext";

const LinkButton = ({ children }: IProps) => {
  const {
    themeObject: { mainFontColor, sidePanelsColor },
  } = useContext(themeContext);

  const style = {
    color: mainFontColor,
    background: sidePanelsColor,
  };

  return (
    <div className={styles.LinkButton} style={style}>
      {children}
    </div>
  );
};

interface IProps {
  children: string;
}

export default LinkButton;
