import styles from "./index.module.css";
type Props = {
  children: React.ReactNode;
};

export const List = ({ children }: Props) => {
  return <div className={styles["list"]}>{children}</div>;
};
