import { CSSProperties, useContext, useState } from "react";
import styles from "./KanaBar.module.sass";
import themeStateContext from "../../context/themeStateContext";
import {
  hiragana,
  hiraganaDiacritics,
  hiraganaDiagraphs,
  katakana,
  katakanaDiacritics,
  katakanaDiagraphs,
} from "../../utils/kanaArrays";

const getRandomKana = (
  alphabetType: AlphabetType,
  isMonographs: boolean,
  isDiacritics: boolean,
  isDiagraphs: boolean
): KanaType => {
  const kanaArray = [];
  if (alphabetType === "hiragana") {
    if (isMonographs) {
      kanaArray.push(...hiragana);
    }
    if (isDiacritics) {
      kanaArray.push(...hiraganaDiacritics);
    }
    if (isDiagraphs) {
      kanaArray.push(...hiraganaDiagraphs);
    }
  } else if (alphabetType === "katakana") {
    if (isMonographs) {
      kanaArray.push(...katakana);
    }
    if (isDiacritics) {
      kanaArray.push(...katakanaDiacritics);
    }
    if (isDiagraphs) {
      kanaArray.push(...katakanaDiagraphs);
    }
  }

  const randomKana = Math.floor(Math.random() * kanaArray.length);

  return {
    kana: kanaArray[randomKana][0],
    romaji: kanaArray[randomKana][1],
  } as KanaType;
};
interface KanaType {
  kana: string;
  romaji: string;
}
type AlphabetType = "hiragana" | "katakana";

const KanaBar = () => {
  const [{ mainFontColor, wordColor }] = useContext(themeStateContext);
  const [isResultShow, setIsResultShow] = useState(false);
  const [currentKana, setCurrentKana] = useState({
    kana: "",
    romaji: "",
  } as KanaType);
  const [alphabetType, setAlphabetType] = useState<AlphabetType>("hiragana");
  const [isMonographs, setIsMonographs] = useState(true);
  const [isDiacritics, setIsDiacritics] = useState(false);
  const [isDiagraphs, setIsDiagraphs] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const kanaBarStyle: CSSProperties = {
    background: wordColor,
    color: mainFontColor,
  };

  const handleClick = (): void => {
    setCurrentKana(
      getRandomKana(alphabetType, isMonographs, isDiacritics, isDiagraphs)
    );
    setIsResultShow(false);
    setInputValue("");
  };

  return (
    <div className={styles.KanaBar} style={kanaBarStyle}>
      <h1 className={styles.Kana}>の</h1>
      <input
        type="text"
        placeholder="enter romaji reading"
        disabled={isResultShow}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="button"
        value="check"
        onClick={() => setIsResultShow(true)}
      />
      <span>Monographs</span>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={() => setIsMonographs(!isMonographs)}
        checked={isMonographs}
      />
      <span>Diacrtics</span>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={() => setIsDiacritics(!isDiacritics)}
        checked={isDiacritics}
      />
      <span>Diagraphs</span>
      <input
        type="checkbox"
        name=""
        id=""
        onChange={() => setIsDiagraphs(!isDiagraphs)}
        checked={isDiagraphs}
      />

      {isResultShow && (
        <>
          <input type="button" value="next" onClick={handleClick} />
          <span>correct answer: {currentKana.romaji}</span>
        </>
      )}
    </div>
  );
};

export default KanaBar;
