import { useState } from "react";
import styles from "./PanelButton.module.sass";

export const PanelButton = ({ image }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleOnClick = () => {
    setIsOpen((prev) => !prev);
  };

  return isOpen ? (
    <div
      className={styles.Panel + " " + styles.Clicked}
      onClick={HandleOnClick}
      style={{ transform: "rotate(180deg)" }}
    >
      <img src={image} />
    </div>
  ) : (
    <div className={styles.Panel} onClick={HandleOnClick}>
      <img src={image} />
    </div>
  );
};

interface IProps {
  image: string;
}
