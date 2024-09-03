import { CSSProperties, useContext } from "react";
import styles from "./Word.module.sass";
import themeContext from "../../../context/themeStateContext";
import { Link } from "react-router-dom";

export const Word = ({
  Rank,
  Lemma,
  PartOfSpeech,
  EnglishGloss,
  Romaji,
}: Props) => {
  const [{ wordColor, secondFontColor, mainFontColor }] =
    useContext(themeContext);

  const wordStyle: CSSProperties = {
    background: wordColor,
    color: secondFontColor,
  };

  const LinkStyle: CSSProperties = {
    all: "unset",
    height: "100%",
    width: "100%",
  };

  return (
    <div className={styles.word} key={Rank} style={wordStyle}>
      <Link to={`/word/${Rank}`} style={LinkStyle}>
        <div className={styles.topFlexContainer}>
          <div className={styles.name}>
            <label>
              <span style={{ color: secondFontColor }}>{Rank}.</span>{" "}
              <span style={{ color: mainFontColor }}>{Lemma}</span>
              <span
                className={styles.romaji}
                style={{ color: secondFontColor }}
              >
                {Romaji}
              </span>
            </label>
          </div>
          <div className={styles.partOfSpeech}>
            <label>{PartOfSpeech.flatMap((part) => part + " ")}</label>
          </div>
        </div>
        <div className={styles.downFlexContainer}></div>
        <div className={styles.definition}>
          <label>{EnglishGloss.flatMap((part) => part + " ")}</label>
        </div>
      </Link>
    </div>
  );
};

interface Props {
  Rank: number;
  Lemma: string;
  PartOfSpeech: string[];
  EnglishGloss: string[];
  Romaji: string;
}
