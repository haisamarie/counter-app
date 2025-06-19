import styles from "./index.module.css";
import { Button } from "../Button";
import { Text } from "../Text";

import { useCount } from "../../hooks/useCount";

type Props = {
  upperLimit?: number;
};

export const ButtonList = ({ upperLimit }: Props) => {
  const {
    onClickCountUp,
    onClickCountDown,
    onClickClear,
    isDownDisabled,
    isClearDisabled,
    isUpDisabled,
    count,
  } = useCount({ upperLimit: upperLimit ?? 0 });

  return (
    <>
      <Text>{count}</Text>
      <div className={styles["list"]}>
        <Button disabled={isUpDisabled} onClick={onClickCountUp} label="UP" />
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
