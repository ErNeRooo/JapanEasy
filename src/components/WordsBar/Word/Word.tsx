import styles from "./Word.module.sass";

export const Word = ({ name, definition, pronunciation }: IProps) => {
  return (
    <div className={styles.word}>
      <h1 className={styles.name}>{name}</h1>
      <h1 className={styles.pronunciation}>{pronunciation}</h1>
      <h1 className={styles.definition}>{definition}</h1>
    </div>
  );
};

interface IProps {
  name: string;
  definition: string;
  pronunciation: string;
}
