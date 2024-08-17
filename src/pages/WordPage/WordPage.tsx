import { useParams } from "react-router-dom";

const WordPage = () => {
  const { wordRank } = useParams();
  return (
    <>
      <h1>{wordRank}</h1>
    </>
  );
};

export default WordPage;
