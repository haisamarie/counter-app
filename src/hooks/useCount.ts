import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState<number>(0);

  const onClickCountUp = () => {
    setCount(count + 1);
  };
  const onClickCountDown = () => {
    setCount(count - 1);
  };
  const onClickClear = () => {
    setCount(0);
  };
  const isDisabled = count <= 0 ? true : false;

  return { onClickCountUp, onClickCountDown, onClickClear, count, isDisabled };
};
