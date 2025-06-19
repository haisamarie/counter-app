import { Layout } from "./components/Layout";
import { ButtonList } from "./components/ButtonList";
import { SelectNumber } from "./components/SelectNumber";

function App() {
  return (
    <>
      <Layout>
        <ButtonList />
        <SelectNumber />
      </Layout>
    </>
  );
}

export default App;
