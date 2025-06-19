import styles from "./index.module.css";
type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return <div className={styles["layout"]}>{children}</div>;
};
