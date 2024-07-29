import styles from "./DictionaryPage.module.sass";
import { WordsBar } from "../WordsBar/WordsBar.tsx";
import { SearchBar } from "../SearchBar/SearchBar.tsx";

export const DictionaryPage = () => {
  return (
    <>
      <SearchBar></SearchBar>
      <div className={styles.wyszukiwanie}></div>
      <WordsBar></WordsBar>
    </>
  );
};
