import styles from "./index.module.css";
type Props = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {label}
    </button>
  );
};
