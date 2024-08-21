import { CSSProperties, useContext } from "react";
import styles from "./Info.module.sass";
import themeStateContext from "../../../../context/themeStateContext";
import getFullPartOfSpeech from "../../../../utils/getFullPartOfSpeech";

const Info = ({ name, value }: Props) => {
  const [{ mainColor, secondFontColor }] = useContext(themeStateContext);

  const infoStyle: CSSProperties = {
    background: mainColor,
  };
  const nameStyle: CSSProperties = {
    color: secondFontColor,
  };

  return (
    <div className={styles.Info} style={infoStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <span>
        {name.toLowerCase() === "part of speech" && typeof value === "object"
          ? getFullPartOfSpeech(value).flatMap((part, index) => {
              if (index < getFullPartOfSpeech(value).length - 1)
                return part + ", ";
              else return part;
            })
          : value}
      </span>
    </div>
  );
};

interface Props {
  name: string;
  value: string[] | string | number;
}

export default Info;
