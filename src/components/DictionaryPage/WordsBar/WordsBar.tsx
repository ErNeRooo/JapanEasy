import { useEffect, useState } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";

export const WordsBar = () => {
  const [words, setWords] = useState<wordTypes[]>([
    {
      frequencyPlace: 18,
      name: "言う",
      romaji: "iu",
      partOfSpeech: "verb",
      definition: "say, speak, talk",
    },
  ]);

  useEffect(() => {
    setWords([
      {
        frequencyPlace: 18,
        name: "言う",
        romaji: "iu",
        partOfSpeech: "verb",
        definition: "say, speak, talk",
      },
      {
        frequencyPlace: 48,
        name: "行く",
        romaji: "iku",
        partOfSpeech: "verb",
        definition: "go; come",
      },
      {
        frequencyPlace: 64,
        name: "来る",
        romaji: "kuru",
        partOfSpeech: "verb",
        definition: "come",
      },
      {
        frequencyPlace: 67,
        name: "見る",
        romaji: "miru",
        partOfSpeech: "verb",
        definition: "see; look at, watch; check",
      },
      {
        frequencyPlace: 58,
        name: "人",
        romaji: "hito",
        partOfSpeech: "noun",
        definition: "person, people, human being",
      },
      {
        frequencyPlace: 47,
        name: "無い",
        romaji: "nai",
        partOfSpeech: "i-adj.",
        definition: "There is no . . . , no . . .",
      },
      {
        frequencyPlace: 31,
        name: "けれど",
        romaji: "keredo",
        partOfSpeech: "conj.",
        definition: "though, although",
      },
      {
        frequencyPlace: 794,
        name: "繰り返す",
        romaji: "kurikaesu",
        partOfSpeech: "verb",
        definition: "repeat, do over again",
      },
    ]);
  }, []);

  return (
    <div className={styles.WordsBar}>
      {words.map(
        ({ frequencyPlace, name, romaji, partOfSpeech, definition }) => (
          <Word
            frequencyPlace={frequencyPlace}
            name={name}
            romaji={romaji}
            partOfSpeech={partOfSpeech}
            definition={definition}
          />
        )
      )}
    </div>
  );
};

interface wordTypes {
  frequencyPlace: number;
  name: string;
  romaji: string;
  partOfSpeech: string;
  definition: string;
}
