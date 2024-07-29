import styles from "./WordsBar.module.sass";

export const WordsBar = () => {
  const words: string[] = ["koto", "ie"];

  const wordsMapping = () => {
    for (const word in words) {
      return <div className={styles.word}>{word}</div>;
    }
  };

  return <>{wordsMapping}</>;
};
