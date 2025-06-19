import { Layout } from "./components/Layout";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { List } from "./components/List";
import { useCount } from "./hooks/useCount";

function App() {
  const { onClickCountUp, onClickCountDown, onClickClear, count, isDisabled } =
    useCount();
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
          <Button disabled={isDisabled} onClick={onClickClear} label="CLEAR" />
        </List>
      </Layout>
    </>
  );
}

export default App;
