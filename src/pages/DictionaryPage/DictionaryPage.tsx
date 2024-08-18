import WordsBar from "../../components/WordsBar/WordsBar.tsx";
import TopBar from "../../components/TopBar/TopBar.tsx";
import { useState } from "react";
import searchContext from "../../context/searchContext.ts";
import searchTypes from "../../types/searchTypes.ts";
import wordsDataContext from "../../context/wordsDataContext.ts";
import useSetWordsData from "../../hooks/useSetWordsData.ts";

export const DictionaryPage = () => {
  const [search, setSearch] = useState<searchTypes>({
    searchPrompt: "",
    partOfSpeech: "",
    field: "Rank",
    order: "asc",
    isRankSearchActive: false,
    isLemmaSearchActive: true,
    isRomajiSearchActive: true,
    isEnglishSearchActive: false,
  });
  const { words, setWordsData, isLoading, errorMessage } =
    useSetWordsData(search);

  return (
    <>
      <wordsDataContext.Provider
        value={[words, setWordsData, isLoading, errorMessage]}
      >
        <searchContext.Provider value={[search, setSearch]}>
          <TopBar isSearchBarVisible={true} />
          <WordsBar></WordsBar>
        </searchContext.Provider>
      </wordsDataContext.Provider>
    </>
  );
};
