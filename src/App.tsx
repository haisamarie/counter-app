import { Layout } from "./components/Layout";
import { Button } from "./components/Button";
import { Text } from "./components/Text";
import { List } from "./components/List";

const onClickCountUp = () => {
  console.log("UP button clicked");
};
const onClickCountDown = () => {
  console.log("Down button clicked");
};
const onClickClear = () => {
  console.log("clear button clicked");
};

function App() {
  return (
    <>
      <Layout>
        <Text>0</Text>
        <List>
          <Button onClick={onClickCountUp} label="UP" />
          <Button onClick={onClickCountDown} label="DOWN" />
          <Button onClick={onClickClear} label="CLEAR" />
        </List>
      </Layout>
    </>
  );
}

export default App;
