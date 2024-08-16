import { CSSProperties, useContext } from "react";
import styles from "./PromptCheckBoxes.module.sass";
import searchContext from "../../../../../context/searchContext";
import themeStateContext from "../../../../../context/themeStateContext";

const PromptCheckBoxes = () => {
  const [words, setWordsData] = useContext(searchContext);
  const [{ secondFontColor, mainFontColor, secondColor, lineColor }] =
    useContext(themeStateContext);

  const spanStyle: CSSProperties = {
    color: secondFontColor,
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

  return (
    <div className={styles.PromptCheckBoxes}>
      <div className={styles.line}>
        <input
          type="checkbox"
          className={styles.checkbox}
          style={
            words.isRankSearchActive ? checkboxCheckedStyle : checkboxStyle
          }
          checked={words.isRankSearchActive}
          onChange={(e) =>
            setWordsData({ ...words, isRankSearchActive: e.target.checked })
          }
          value={"Rank"}
        />
        <span style={spanStyle}>Rank</span>
      </div>

      <div className={styles.line}>
        <input
          type="checkbox"
          className={styles.checkbox}
          style={
            words.isLemmaSearchActive ? checkboxCheckedStyle : checkboxStyle
          }
          checked={words.isLemmaSearchActive}
          onChange={(e) =>
            setWordsData({ ...words, isLemmaSearchActive: e.target.checked })
          }
          value={"Lemma"}
        />
        <span style={spanStyle}>Lemma</span>
      </div>

      <div className={styles.line}>
        <input
          type="checkbox"
          className={styles.checkbox}
          style={
            words.isRomajiSearchActive ? checkboxCheckedStyle : checkboxStyle
          }
          checked={words.isRomajiSearchActive}
          onChange={(e) =>
            setWordsData({ ...words, isRomajiSearchActive: e.target.checked })
          }
          value={"Romaji"}
        />
        <span style={spanStyle}>Romaji</span>
      </div>

      <div className={styles.line}>
        <input
          type="checkbox"
          className={styles.checkbox}
          style={
            words.isEnglishSearchActive ? checkboxCheckedStyle : checkboxStyle
          }
          checked={words.isEnglishSearchActive}
          onChange={(e) =>
            setWordsData({ ...words, isEnglishSearchActive: e.target.checked })
          }
          value={"English"}
        />
        <span style={spanStyle}>English</span>
      </div>
    </div>
  );
};

export default PromptCheckBoxes;
