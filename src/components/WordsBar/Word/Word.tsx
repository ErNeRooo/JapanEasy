import styles from "./Word.module.sass";

export const Word = ({ name, hiragana, definition, romaji }: IProps) => {
  return (
    <div className={styles.word}>
      <div className={styles.leftBar}>
        <div className={styles.name}>{name}</div>
        <div className={styles.hiragana}>{hiragana}</div>
      </div>

      <div className={styles.rightBar}>
        <div className={styles.romaji}>{romaji}</div>
        <div className={styles.definition}>{definition}</div>
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
