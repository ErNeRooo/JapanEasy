import styles from "./Theme.module.sass";

const Theme = ({ name, backgroundColor }: IProps) => {
  return (
    <div className={styles.Theme} style={{ backgroundColor: backgroundColor }}>
      {name}
    </div>
  );
};

interface IProps {
  name: string;
  backgroundColor: string;
}

export default Theme;
