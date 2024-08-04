import styles from "./PanelButton.module.sass";

export const PanelButton = ({ image }: IProps) => {
  return (
    <div className={styles.Panel}>
      <img src={image} />
    </div>
  );
};

interface IProps {
  image: string;
}
