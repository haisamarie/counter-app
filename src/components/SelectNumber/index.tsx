import styles from "./index.module.css";
import { useState, type ChangeEvent } from "react";
export const SelectNumber = () => {
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUpperLimit(value);
  };

  return (
    <div className={styles["wrap"]}>
      {upperLimit}
      <p className={styles["text"]}>カウンターの上限設定</p>
      <input
        onChange={handleChange}
        className={styles["input"]}
        type="number"
        min={0}
      />
    </div>
  );
};
