import { useState } from "react";
import styles from "./WordsBar.module.sass";
import { Word } from "./Word/Word";

export const WordsBar = () => {
  const [words, setWords] = useState([
    ["事", "koto", "sprawa"],
    ["言う", "iu", "mówić, rozmawiać"],
  ]);

  return (
    <div className={styles.WordsBar}>
      {words.map((word) => (
        <Word name={word[0]} pronunciation={word[1]} definition={word[2]} />
      ))}
    </div>
  );
};
