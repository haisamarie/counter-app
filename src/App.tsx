import { Layout } from "./components/Layout";
import { ButtonList } from "./components/ButtonList";
import { SelectNumber } from "./components/SelectNumber";
import { useLimit } from "./hooks/useLimit";

function App() {
  const { handleChange, upperLimit } = useLimit();

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
