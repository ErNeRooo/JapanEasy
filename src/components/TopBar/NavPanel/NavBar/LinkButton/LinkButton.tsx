import { CSSProperties, useContext } from "react";
import styles from "./LinkButton.module.sass";
import themeContext from "../../../../../context/themeStateContext";

const LinkButton = ({ children }: Props) => {
  const [{ mainFontColor, sidePanelsColor }] = useContext(themeContext);

  const linkButtonStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
  };

  return (
    <div className={styles.LinkButton} style={linkButtonStyle}>
      {children}
    </div>
  );
};

interface Props {
  children: string;
}

export default LinkButton;
