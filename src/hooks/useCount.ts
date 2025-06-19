import { useState, useMemo } from "react";

type UseCountProps = {
  upperLimit: number;
};
export const useCount = ({ upperLimit }: UseCountProps) => {
  const [count, setCount] = useState<number>(0);

  const onClickCountUp = () => {
    setCount((prev) => prev + 1);
  };
  const onClickCountDown = () => {
    setCount((prev) => prev - 1);
  };
  const onClickClear = () => {
    setCount(0);
  };
  const isDownDisabled = useMemo(() => count <= 0, [count]);
  const isClearDisabled = useMemo(() => count === 0, [count]);
  const isUpDisabled = useMemo(() => count >= upperLimit, [count, upperLimit]);

  return {
    onClickCountUp,
    onClickCountDown,
    onClickClear,
    count,
    isDownDisabled,
    isClearDisabled,
    isUpDisabled,
  };
};
