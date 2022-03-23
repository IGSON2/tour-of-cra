import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link to={`${process.env.PUBLIC_URL}/`}>
        <h5 className={styles.pageName}>IGSONFLIX</h5>
      </Link>
    </div>
  );
}

export default Navbar;
