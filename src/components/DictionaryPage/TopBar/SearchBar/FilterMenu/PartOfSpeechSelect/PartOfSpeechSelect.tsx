import { CSSProperties, useContext } from "react";
import styles from "./PartOfSpeechSelect.module.sass";
import themeContext from "../../../../../../context/themeContext";

const PartOfSpeechSelect = () => {
  const {
    themeObject: { mainColor, secondFontColor },
  } = useContext(themeContext);
  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: mainColor,
  };

  const optionStyle: CSSProperties = {
    //borderBottom: "1px solid " + mainColor,
    //borderBlockEnd: "none",
  };

  return (
    <select
      className={styles.PartOfSpeechSelect}
      name="partOfSpeech"
      id="partOfSpeech"
      style={selectStyle}
    >
      <option style={optionStyle} value="">
        ▼
      </option>
      <option style={optionStyle} value="adn.">
        adn. | adnominal
      </option>
      <option style={optionStyle} value="adv.">
        adv. | adverb
      </option>
      <option style={optionStyle} value="aux.">
        aux. | auxiliary
      </option>
      <option style={optionStyle} value="conj.">
        conj. | conjunction
      </option>
      <option style={optionStyle} value="cp.">
        cp. | compound
      </option>
      <option style={optionStyle} value="i-adj.">
        i-adj. | i-adjective
      </option>
      <option style={optionStyle} value="interj.">
        interj. | interjection
      </option>
      <option style={optionStyle} value="n.">
        n. | noun
      </option>
      <option style={optionStyle} value="na-adj.">
        na-adj. | na-adjective
      </option>
      <option style={optionStyle} value="num.">
        num. | numeral
      </option>
      <option style={optionStyle} value="p.">
        p. | particle
      </option>
      <option style={optionStyle} value="p. case">
        p. case | case particle
      </option>
      <option style={optionStyle} value="p. conj.">
        p. conj. | conjunctive particle
      </option>
      <option style={optionStyle} value="p. disc.">
        p. disc. | discourse particle
      </option>
      <option style={optionStyle} value="prefix">
        prefix | prefix
      </option>
      <option style={optionStyle} value="pron.">
        pron. | pronoun
      </option>
      <option style={optionStyle} value="suffix">
        suffix | suffix
      </option>
      <option style={optionStyle} value="v.">
        v. | verb
      </option>
    </select>
  );
};

export default PartOfSpeechSelect;
