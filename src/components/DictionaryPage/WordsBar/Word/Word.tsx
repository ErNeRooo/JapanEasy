import { useContext } from "react";
import styles from "./Word.module.sass";
import themeContext from "../../../../context/themeContext";

export const Word = ({
  Rank,
  Lemma,
  PartOfSpeech,
  EnglishGloss,
  Romaji,
}: IProps) => {
  const {
    themeObject: { wordColor, secondFontColor, mainFontColor },
  } = useContext(themeContext);

  const style = {
    background: wordColor,
    color: secondFontColor,
  };

  return (
    <div className={styles.word} key={Rank} style={style}>
      <div className={styles.topFlexContainer}>
        <div className={styles.name}>
          <label>
            <span style={{ color: secondFontColor }}>{Rank}.</span>{" "}
            <span style={{ color: mainFontColor }}>{Lemma}</span>
            <span className={styles.romaji} style={{ color: secondFontColor }}>
              {Romaji}
            </span>
          </label>
        </div>
        <div className={styles.partOfSpeech}>
          <label>{PartOfSpeech}</label>
        </div>
      </div>
      <div className={styles.downFlexContainer}></div>
      <div className={styles.definition}>
        <label>{EnglishGloss}</label>
      </div>
    </div>
  );
};

interface IProps {
  Rank: number;
  Lemma: string;
  PartOfSpeech: string;
  EnglishGloss: string;
  Romaji: string;
}
