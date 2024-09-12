import styles from "./KanaPage.module.sass";
import TopBar from "../../components/TopBar/TopBar";
import KanaBar from "../../components/KanaBar/KanaBar";

const KanaPage = () => {
  return (
    <div className={styles.KanaPage}>
      <TopBar isSearchBarVisible={false} />
      <KanaBar />
    </div>
  );
};

export default KanaPage;
