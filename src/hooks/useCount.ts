import { useState, useMemo } from "react";

export const useCount = () => {
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
  const isDisabled = useMemo(() => count <= 0, [count]);

  return { onClickCountUp, onClickCountDown, onClickClear, count, isDisabled };
};
