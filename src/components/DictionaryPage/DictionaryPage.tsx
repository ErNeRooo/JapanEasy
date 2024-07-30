import styles from "./DictionaryPage.module.sass";
import { WordsBar } from "../WordsBar/WordsBar.tsx";
import { SearchBar } from "../SearchBar/SearchBar.tsx";

export const DictionaryPage = () => {
  return (
    <div className={styles.container}>
      <SearchBar></SearchBar>
      <WordsBar></WordsBar>
    </div>
  );
};
