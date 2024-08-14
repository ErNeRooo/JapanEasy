import { BaseSyntheticEvent, useContext } from "react";
import styles from "./SortOrderBySelect.module.sass";
import themeContext from "../../../../../../context/themeStateContext";
import { CSSProperties } from "react";
import searchContext from "../../../../../../context/searchContext";
import searchTypes from "../../../../../../types/searchTypes";

const SortOrderBySelect = () => {
  const [{ secondColor, secondFontColor }] = useContext(themeContext);
  const [search, setSearch] = useContext(searchContext);

  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: secondColor,
  };

  const handleChange = (e: BaseSyntheticEvent): void => {
    const newSearchObject: searchTypes = {
      ...search,
      order: e.target.value,
    };

    setSearch(newSearchObject);
  };

  return (
    <div className={styles.container}>
      <select
        style={selectStyle}
        className={styles.select}
        name="orderBySelect"
        id="orderBySelect"
        onChange={handleChange}
      >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </div>
  );
};

export default SortOrderBySelect;
