import styles from "./index.module.css";
type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ label, onClick, disabled = false }: Props) => {
  return (
    <button disabled={disabled} className={styles["button"]} onClick={onClick}>
      {label}
    </button>
  );
};
