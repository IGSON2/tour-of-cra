import Btn from "./myButton";
import styles from "./Title.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.Title}>Welcome back to React!!</h1>
      <Btn text={"ThisIsNeverButton"} />
    </div>
  );
}

export default App;
