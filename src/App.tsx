import { Layout } from "./components/Layout";
import { ButtonList } from "./components/ButtonList";
import { SelectNumber } from "./components/SelectNumber";
import { type ChangeEvent, useState } from "react";

function App() {
  const [upperLimit, setUpperLimit] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setUpperLimit(value);
  };
  return (
    <>
      <Layout>
        <ButtonList upperLimit={upperLimit} />
        <SelectNumber handleChange={handleChange} />
      </Layout>
    </>
  );
}

export default App;
