import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { SelectNumber } from "./components/SelectNumber";

function App() {
  return (
    <>
      <Layout>
        <List />
        <SelectNumber />
      </Layout>
    </>
  );
}

export default App;
