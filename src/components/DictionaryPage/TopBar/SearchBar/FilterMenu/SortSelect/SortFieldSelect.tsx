import { useContext } from "react";
import styles from "./SortFieldSelect.module.sass";
import themeContext from "../../../../../../context/themeContext";
import { CSSProperties } from "react";

const SortSelect = () => {
  const {
    themeObject: { secondColor, secondFontColor },
  } = useContext(themeContext);

  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: secondColor,
  };

  return (
    <div className={styles.SortSelect}>
      <div className={styles.propertySelect}>
        <select
          style={selectStyle}
          className={styles.select}
          name="fieldSelect"
          id="fieldSelect"
        >
          <option value="rank">Rank</option>
          <option value="lemma">Lemma</option>
          <option value="romaji">Romaji</option>
        </select>
      </div>
    </div>
  );
};

export default SortSelect;
