import { Layout } from "./components/Layout";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { List } from "./components/List";
import { useState } from "react";

function App() {
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
  return (
    <>
      <Layout>
        <Text>{count}</Text>
        <List>
          <Button onClick={onClickCountUp} label="UP" />
          <Button
            onClick={onClickCountDown}
            label="DOWN"
            disabled={isDisabled}
          />
          <Button onClick={onClickClear} label="CLEAR" />
        </List>
      </Layout>
    </>
  );
}

export default App;
