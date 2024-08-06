import { useContext } from "react";
import styles from "./LinkButton.module.sass";
import themeContext from "../../../../../context/themeContext";

const LinkButton = ({ children }: IProps) => {
  const {
    themeObject: { lineColor },
  } = useContext(themeContext);

  const style = {
    borderBottom: "1px solid" + lineColor,
  };

  return (
    <div className={styles.Link} style={style}>
      {children}
    </div>
  );
};

interface IProps {
  children: string;
}

export default LinkButton;
