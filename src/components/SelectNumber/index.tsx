import styles from "./index.module.css";
export const SelectNumber = () => {
  return (
    <div className={styles["wrap"]}>
      <p className={styles["text"]}>カウンターの上限設定</p>
      <input
        onChange={() => {}}
        className={styles["input"]}
        type="number"
        min={0}
      />
    </div>
  );
};
