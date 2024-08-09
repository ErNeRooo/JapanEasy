import { useContext } from "react";
import styles from "./SortOrderBySelect.module.sass";
import themeContext from "../../../../../../context/themeContext";
import { CSSProperties } from "react";

const SortOrderBySelect = () => {
  const {
    themeObject: { secondColor, secondFontColor },
  } = useContext(themeContext);

  const selectStyle: CSSProperties = {
    color: secondFontColor,
    background: secondColor,
  };

  return (
    <div className={styles.container}>
      <select
        style={selectStyle}
        className={styles.select}
        name="orderBySelect"
        id="orderBySelect"
      >
        <option value="asc">ascending</option>
        <option value="desc">descending</option>
      </select>
    </div>
  );
};

export default SortOrderBySelect;
