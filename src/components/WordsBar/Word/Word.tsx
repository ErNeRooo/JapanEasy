import { useState } from "react";
import styles from "./Word.module.sass";

export const Word = ({
  frequencyPlace,
  name,
  partOfSpeech,
  definition,
  romaji,
}: IProps) => {
  return (
    <div className={styles.word} key={frequencyPlace}>
      <div className={styles.name}>
        <label>
          {frequencyPlace}. <span className={styles.white}>{name}</span>
          <span className={styles.romaji}>{romaji}</span>
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
