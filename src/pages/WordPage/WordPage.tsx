import { useParams } from "react-router-dom";
import getWords from "../../utils/getWords";
import TopBar from "../../components/TopBar/TopBar";

const WordPage = () => {
  const { wordRank } = useParams();

  if (wordRank === undefined) return;

  const word = getWords()[parseInt(wordRank) - 1];

  return (
    <>
      <TopBar isSearchBarVisible={false} />
    </>
  );
};

export default WordPage;
