import styles from "./component.module.css";
import Sponsors from "./sponsors";
import { Youtube } from "./youtube";

export const InstructiesComponent = () => (
  <div className={styles.container}>
    <h2>Instructies - hoe maak ik een stokpaardje?</h2>
    <p>
      Nog geen stokpaardje ontvangen? Download de template in
      <b>
        <a href="SWB_2024.pdf" download> A3 </a>
      </b>
      formaat
    </p>
    <div className={styles.containeritem}>
      <Youtube code="muMwcUJwl_4" />
    </div>
    <h2>Sponsors</h2>
    <Sponsors />
  </div>
);
