import styles from "./App.module.css";
function App() {
  return (
    <>
      <div>
        <h2>カウンター</h2>
        <p>
          カウンターの値: <span>0</span>
        </p>
        <div>
          <button>増やす</button>
          <button>減らす</button>
          <button>リセット</button>
        </div>
      </div>
    </>
  );
}

export default App;
