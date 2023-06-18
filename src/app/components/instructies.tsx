import styles from "./component.module.css";
import Sponsors from "./sponsors";
import { Youtube } from "./youtube";

export const InstructiesComponent = () => (
  <div className={styles.container}>
    <h2>Instructies - hoe maak ik een stokpaardje?</h2>
    <div className={styles.containeritem}>
      <Youtube code="muMwcUJwl_4" />
    </div>
    <h2>Sponsors</h2>
    <Sponsors />
  </div>
);
