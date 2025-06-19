import { Layout } from "./components/Layout";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { List } from "./components/List";

function App() {
  return (
    <>
      <Layout>
        <Text>0</Text>

        <List>
          <Button label="UP" />
          <Button label="DOWN" />
          <Button label="CLEAR" />
        </List>
      </Layout>
    </>
  );
}

export default App;
