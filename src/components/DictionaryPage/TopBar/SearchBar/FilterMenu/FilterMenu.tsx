import { CSSProperties, useContext } from "react";
import styles from "./FilterMenu.module.sass";
import themeContext from "../../../../../context/themeContext";

const FilterMenu = ({ isVisible }: IProps) => {
  const {
    themeObject: { mainFontColor, sidePanelsColor },
  } = useContext(themeContext);

  const FilterMenuStyle: CSSProperties = {
    color: mainFontColor,
    background: sidePanelsColor,
    visibility: isVisible ? "visible" : "hidden",
    opacity: isVisible ? "1" : "0",
    transform:
      (isVisible ? "translateY(3rem)" : "translateY(2rem)") +
      "translateX(-40%)",
  };

  return (
    <div className={styles.FilterMenu} style={FilterMenuStyle}>
      <select name="partOfSpeech" id="partOfSpeech">
        <option value="">Select an option</option>
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

interface IProps {
  isVisible: boolean;
}

export default FilterMenu;
