import { BaseSyntheticEvent, useContext } from "react";
import styles from "./SortFieldSelect.module.sass";
import themeContext from "../../../../../../context/themeStateContext";
import { CSSProperties } from "react";
import searchContext from "../../../../../../context/searchContext";
import searchTypes from "../../../../../../types/searchTypes";

const SortFieldSelect = () => {
  const [{ secondColor, secondFontColor }] = useContext(themeContext);
  const [search, setSearch] = useContext(searchContext);

  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: secondColor,
  };

  const handleChange = (e: BaseSyntheticEvent): void => {
    const newSearchObject: searchTypes = {
      ...search,
      field: e.target.value,
    };

    setSearch(newSearchObject);
  };

  return (
    <div className={styles.container}>
      <select
        style={selectStyle}
        className={styles.select}
        name="fieldSelect"
        id="fieldSelect"
        onChange={handleChange}
      >
        <option value="Rank">Rank</option>
        <option value="Lemma">Lemma</option>
        <option value="Romaji">Romaji</option>
      </select>
    </div>
  );
};

export default SortFieldSelect;
