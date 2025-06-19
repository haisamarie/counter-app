import { Layout } from "./components/Layout";
import { Button } from "./components/Button";
import { Text } from "./components/Text";

import styles from "./main.module.css";

function App() {
  return (
    <>
      <Layout>
        <Text>0</Text>

        <div className={styles["wrap"]}>
          <Button label="UP" />
          <Button label="DOWN" />
          <Button label="CLEAR" />
        </div>
      </Layout>
    </>
  );
}

export default App;
