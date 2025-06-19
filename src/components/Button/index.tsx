import styles from "./index.module.css";
type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return <button className={styles["button"]}>{label}</button>;
};
