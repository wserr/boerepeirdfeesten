import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./nav.module.css";
import { faHouse, faList } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export const Nav = () => (
  <div className={styles.container}>
    <Link href="/home" className={styles.firstitem}>
      <h3>Boerepeirdfeesten</h3>
    </Link>
    <Link href="/home" className={styles.item}>
      <FontAwesomeIcon icon={faHouse} className={styles.icon} />
      <p className={styles.navtext}>Home</p>
    </Link>
    <Link href="/instructies" className={styles.item}>
      <FontAwesomeIcon icon={faList} className={styles.icon} />
      <p className={styles.navtext}>Instructies</p>
    </Link>
  </div>
);
