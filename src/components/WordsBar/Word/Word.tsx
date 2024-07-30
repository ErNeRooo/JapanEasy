import styles from "./Word.module.sass";

export const Word = ({ name, definition, romaji }: IProps) => {
  return (
    <div className={styles.word}>
      <div className={styles.name}>
        <label>{name}</label>
      </div>
      <div className={styles.romaji}>
        <label>{romaji}</label>
      </div>
      <div className={styles.definition}>
        <label>{definition}</label>
      </div>
    </div>
  );
};

interface IProps {
  name: string;
  definition: string;
  romaji: string;
}
