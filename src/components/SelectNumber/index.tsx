import styles from "./index.module.css";
import { type ChangeEvent } from "react";

type Props = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const SelectNumber = ({ handleChange }: Props) => {
  return (
    <div className={styles["wrap"]}>
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
