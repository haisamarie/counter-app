import { type ChangeEvent, useState } from "react";

export const useLimit = () => {
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUpperLimit(value);
  };

  return {
    upperLimit,
    setUpperLimit,
    handleChange,
  };
};
