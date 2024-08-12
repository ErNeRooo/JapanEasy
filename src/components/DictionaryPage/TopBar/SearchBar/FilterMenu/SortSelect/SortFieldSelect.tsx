import { useContext } from "react";
import styles from "./SortFieldSelect.module.sass";
import themeContext from "../../../../../../context/themeStateContext";
import { CSSProperties } from "react";

const SortFieldSelect = () => {
  const [{ secondColor, secondFontColor }] = useContext(themeContext);

  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: secondColor,
  };

  return (
    <div className={styles.container}>
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
  );
};

export default SortFieldSelect;
