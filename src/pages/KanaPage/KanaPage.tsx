import styles from "./KanaPage.module.sass";
import TopBar from "../../components/TopBar/TopBar";

const KanaPage = () => {
  return (
    <div className={styles.KanaPage}>
      <TopBar isSearchBarVisible={false} />
    </div>
  );
};

export default KanaPage;
