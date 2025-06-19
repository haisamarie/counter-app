import styles from "./index.module.css";
type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  upperLimit?: number;
};
export const SelectNumber = ({
  upperLimit = 10,
  handleChange,
  disabled,
}: Props) => {
  return (
    <div className={styles["wrap"]}>
      <p className={styles["text"]}>カウンターの上限</p>
      <input
        onChange={handleChange}
        className={styles["input"]}
        type="number"
        min={0}
        disabled={disabled}
        name="limit"
        value={upperLimit}
      />
    </div>
  );
};
