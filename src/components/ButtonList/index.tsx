import styles from "./index.module.css";
import { Button } from "../Button";
import { Text } from "../Text";

import { useCount } from "../../hooks/useCount";

export const ButtonList = () => {
  const {
    onClickCountUp,
    onClickCountDown,
    onClickClear,
    isDownDisabled,
    isClearDisabled,
    count,
  } = useCount();

  return (
    <>
      <Text>{count}</Text>
      <div className={styles["list"]}>
        <Button onClick={onClickCountUp} label="UP" />
        <Button
          onClick={onClickCountDown}
          label="DOWN"
          disabled={isDownDisabled}
        />
        <Button
          disabled={isClearDisabled}
          onClick={onClickClear}
          label="CLEAR"
        />
      </div>
    </>
  );
};
