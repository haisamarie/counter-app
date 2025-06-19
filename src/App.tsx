import { Layout } from "./components/Layout";
import { ButtonList } from "./components/ButtonList";
import { SelectNumber } from "./components/SelectNumber";
import { useLimit } from "./hooks/useLimit";
import { useCount } from "./hooks/useCount";

function App() {
  const { handleChange, upperLimit } = useLimit();
  const {
    onClickCountUp,
    onClickCountDown,
    onClickClear,
    isDownDisabled,
    isClearDisabled,
    isUpDisabled,
    count,
  } = useCount({ upperLimit: upperLimit ?? 0 });
  return (
    <>
      <Layout>
        <ButtonList
          upperLimit={upperLimit}
          onClickCountUp={onClickCountUp}
          onClickCountDown={onClickCountDown}
          isDownDisabled={isDownDisabled}
          isClearDisabled={isClearDisabled}
          isUpDisabled={isUpDisabled}
          onClickClear={onClickClear}
          count={count}
        />
        <SelectNumber handleChange={handleChange} disabled={count > 0} />
      </Layout>
    </>
  );
}

export default App;
