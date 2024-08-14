import { BaseSyntheticEvent, CSSProperties, useContext, useState } from "react";
import styles from "./PartOfSpeechSelect.module.sass";
import themeContext from "../../../../../../context/themeStateContext";
import searchContext from "../../../../../../context/searchContext";
import searchTypes from "../../../../../../types/searchTypes";

const PartOfSpeechSelect = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [{ secondColor, secondFontColor }] = useContext(themeContext);
  const [search, setSearch] = useContext(searchContext);

  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: secondColor,
  };

  const handleChange = (e: BaseSyntheticEvent): void => {
    const newSearchObject: searchTypes = {
      ...search,
      partOfSpeech: e.target.value,
    };

    setSearch(newSearchObject);
  };

  return (
    <div className={styles.container}>
      <select
        className={styles.PartOfSpeechSelect}
        name="partOfSpeech"
        id="partOfSpeech"
        style={selectStyle}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        onChange={handleChange}
      >
        <option value="">{isClicked ? "▲" : "▼"}</option>
        <option value="adn.">adn. | adnominal</option>
        <option value="adv.">adv. | adverb</option>
        <option value="aux.">aux. | auxiliary</option>
        <option value="conj.">conj. | conjunction</option>
        <option value="cp.">cp. | compound</option>
        <option value="i-adj.">i-adj. | i-adjective</option>
        <option value="interj.">interj. | interjection</option>
        <option value="n.">n. | noun</option>
        <option value="na-adj.">na-adj. | na-adjective</option>
        <option value="num.">num. | numeral</option>
        <option value="p.">p. | particle</option>
        <option value="p. case">p. case | case particle</option>
        <option value="p. conj.">p. conj. | conjunctive particle</option>
        <option value="p. disc.">p. disc. | discourse particle</option>
        <option value="prefix">prefix | prefix</option>
        <option value="pron.">pron. | pronoun</option>
        <option value="suffix">suffix | suffix</option>
        <option value="v.">v. | verb</option>
      </select>
    </div>
  );
};

export default PartOfSpeechSelect;
