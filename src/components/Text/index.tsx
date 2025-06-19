import styles from "./index.module.css";
type Props = {
  children: React.ReactNode;
};

export const Text = ({ children }: Props) => {
  return <p className={styles["text"]}>{children}</p>;
};
