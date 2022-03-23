import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <span>LOADING...</span>
    </div>
  );
}

export default Loader;
