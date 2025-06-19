import styles from "./index.module.css";
import { Button } from "../Button";
import { Text } from "../Text";

type Props = {
  upperLimit?: number;
  count: number;
  isUpDisabled?: boolean;
  isDownDisabled?: boolean;
  isClearDisabled?: boolean;
  onClickCountUp: () => void;
  onClickCountDown: () => void;
  onClickClear: () => void;
};

export const ButtonList = ({
  count,
  isUpDisabled,
  isClearDisabled,
  onClickCountDown,
  onClickCountUp,
  isDownDisabled,
  onClickClear,
}: Props) => {
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
