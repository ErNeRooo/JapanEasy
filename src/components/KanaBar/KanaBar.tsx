import { CSSProperties, useContext, useEffect, useState } from "react";
import styles from "./KanaBar.module.sass";
import themeStateContext from "../../context/themeStateContext";
import getRandomKana from "../../utils/getRandomKana";
import alphabetType from "../../types/alphabetType";
import KanaType from "../../types/kanaType";

const KanaBar = () => {
  const [
    { mainFontColor, mainColor, sidePanelsColor, lineColor, secondColor },
  ] = useContext(themeStateContext);
  const [isResultShow, setIsResultShow] = useState(false);
  const [currentKana, setCurrentKana] = useState({
    kana: "",
    romaji: "",
  } as KanaType);
  const [alphabet, setAlphabet] = useState<alphabetType>("hiragana");
  const [isMonographs, setIsMonographs] = useState(true);
  const [isDiacritics, setIsDiacritics] = useState(false);
  const [isDiagraphs, setIsDiagraphs] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState(false);

  const kanaBarStyle: CSSProperties = {
    background: sidePanelsColor,
    color: mainFontColor,
  };

  const kanaStyle: CSSProperties = {
    background: mainColor,
  };

  const answerStyle: CSSProperties = {
    background: isResultShow
      ? result
        ? "#16a34a"
        : "#dc2626"
      : sidePanelsColor,
    border: isResultShow ? "none" : `2px solid ${mainColor}`,
    color: mainFontColor,
  };

  const userInputStyle: CSSProperties = {
    background: mainColor,
  };

  const checkButtonStyle: CSSProperties = {
    background: mainColor,
  };

  const checkboxStyle: CSSProperties = {
    accentColor: mainFontColor,
    border: "2px solid" + lineColor,
    background: secondColor,
  };
  const checkboxCheckedStyle: CSSProperties = {
    accentColor: mainFontColor,
    border: "2px solid" + lineColor,
    borderRadius: "40%",
    background: mainFontColor,
  };
  const alphabetButtonStyle: CSSProperties = {
    background: mainColor,
    color: mainFontColor,
  };
  const alphabetButtonCheckedStyle: CSSProperties = {
    background: mainFontColor,
    color: mainColor,
  };

  const handleClick = (): void => {
    if (isResultShow) {
      setCurrentKana(
        getRandomKana(alphabet, isMonographs, isDiacritics, isDiagraphs)
      );
      setIsResultShow(false);
      setInputValue("");
    } else {
      setIsResultShow(true);

      if (inputValue === currentKana.romaji) {
        setResult(true);
      } else {
        setResult(false);
      }
    }
  };

  useEffect(() => {
    if (!isDiacritics && !isDiagraphs) {
      setIsMonographs(true);
    }
  }, [isDiacritics, isDiagraphs]);

  useEffect(() => {
    setCurrentKana(
      getRandomKana(alphabet, isMonographs, isDiacritics, isDiagraphs)
    );
  }, []);

  return (
    <div className={styles.KanaBar} style={kanaBarStyle}>
      <div className={styles.Kana} style={kanaStyle}>
        <span>{currentKana.kana}</span>
      </div>

      <div className={styles.answer} style={answerStyle}>
        <span>{isResultShow && currentKana.romaji}</span>
      </div>

      <input
        type="text"
        placeholder="enter romaji reading"
        //disabled={isResultShow}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className={styles.userInput}
        style={userInputStyle}
      />
      <input
        type="button"
        value={isResultShow ? "next" : "check"}
        onClick={handleClick}
        className={styles.checkButton}
        style={checkButtonStyle}
      />
      <div className={styles.options}>
        <h1>Options</h1>

        <div className={styles.line}>
          <button
            style={
              alphabet === "hiragana"
                ? alphabetButtonCheckedStyle
                : alphabetButtonStyle
            }
            onClick={() => setAlphabet("hiragana")}
          >
            hiragana
          </button>
          <button
            style={
              alphabet === "katakana"
                ? alphabetButtonCheckedStyle
                : alphabetButtonStyle
            }
            onClick={() => setAlphabet("katakana")}
          >
            katakana
          </button>
        </div>

        <div className={styles.line}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => setIsMonographs(!isMonographs)}
            checked={isMonographs}
            disabled={!isDiacritics && !isDiagraphs}
            style={isMonographs ? checkboxCheckedStyle : checkboxStyle}
          />
          <span>Monographs</span>
        </div>
        <div className={styles.line}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => setIsDiacritics(!isDiacritics)}
            checked={isDiacritics}
            style={isDiacritics ? checkboxCheckedStyle : checkboxStyle}
          />
          <span>Diacrtics</span>
        </div>
        <div className={styles.line}>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={() => setIsDiagraphs(!isDiagraphs)}
            checked={isDiagraphs}
            style={isDiagraphs ? checkboxCheckedStyle : checkboxStyle}
          />
          <span>Diagraphs</span>
        </div>
      </div>
    </div>
  );
};

export default KanaBar;
