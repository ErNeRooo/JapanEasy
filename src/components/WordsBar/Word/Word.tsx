import styles from "./Word.module.sass";

export const Word = ({ name, hiragana, definition, romaji }: IProps) => {
  return (
    <div className={styles.word}>
      <div className={styles.leftBar}>
        <h1 className={styles.name}>{name}</h1>
        <h1 className={styles.hiragana}>{hiragana}</h1>
      </div>

      <div className={styles.rightBar}>
        <h1 className={styles.romaji}>{romaji}</h1>
        <h1 className={styles.definition}>{definition}</h1>
      </div>
    </div>
  );
};

interface IProps {
  name: string;
  hiragana: string;
  definition: string;
  romaji: string;
}
