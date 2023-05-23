import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./nav.module.css";
import { faHouse, faList } from "@fortawesome/free-solid-svg-icons";

export const Nav = () => (
  <div className={styles.container}>
    <a href="#" className={styles.firstitem}>
      <h3>Boerepeirdfeesten</h3>
    </a>
    <a href="#" className={styles.item}>
      <FontAwesomeIcon icon={faHouse} className={styles.icon} />
      <p className={styles.navtext}>Home</p>
    </a>
    <a href="#" className={styles.item}>
      <FontAwesomeIcon icon={faList} className={styles.icon} />
      <p className={styles.navtext}>Instructies</p>
    </a>
  </div>
);
