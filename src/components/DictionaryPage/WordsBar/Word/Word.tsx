import { useContext } from "react";
import styles from "./Word.module.sass";
import themeContext from "../../../../context/themeContext";

export const Word = ({
  frequencyPlace,
  name,
  partOfSpeech,
  definition,
  romaji,
}: IProps) => {
  const {
    themeObject: { wordColor, secondFontColor, mainFontColor },
  } = useContext(themeContext);

  const style = {
    background: wordColor,
    color: secondFontColor,
  };

  return (
    <div className={styles.word} key={frequencyPlace} style={style}>
      <div className={styles.name}>
        <label>
          <span style={{ color: secondFontColor }}>{frequencyPlace}.</span>{" "}
          <span style={{ color: mainFontColor }}>{name}</span>
          <span className={styles.romaji} style={{ color: secondFontColor }}>
            {romaji}
          </span>
        </label>
      </div>
      <div className={styles.partOfSpeech}>
        <label>{partOfSpeech}</label>
      </div>

      <div className={styles.definition}>
        <label>{definition}</label>
      </div>
    </div>
  );
};

interface IProps {
  frequencyPlace: number;
  name: string;
  partOfSpeech: string;
  definition: string;
  romaji: string;
}
