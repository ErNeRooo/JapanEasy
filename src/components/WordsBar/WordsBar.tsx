import { useState } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";

export const WordsBar = () => {
  const [words, setWords] = useState([
    ["事", "こと", "koto", "sprawa"],
    ["言う", "いう", "iu", "mówić, rozmawiać"],
    ["家", "いえ", "iu", "dom"],
    ["新しい", "あたらしい", "atarashii", "nowe"],
    ["繰り返す", "くりかえす", "kurikaesu", "powtarzać"],
    ["私私私私私", "わたし", "watashi", "Ja"],
    ["私私私私私私", "わたし", "watashi", "Ja"],
    ["私私私私私私私", "わたし", "watashi", "Ja"],
    ["私私私私私私私私", "わたし", "watashi", "Ja"],
  ]);

  return (
    <div className={styles.WordsBar}>
      {words.map((word) => (
        <Word name={word[0]} romaji={word[2]} definition={word[3]} />
      ))}
    </div>
  );
};
