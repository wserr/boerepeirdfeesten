import styles from "./home.module.css";
import { Maps } from "./maps";
import { Schedule } from "./schedule";
import { Youtube } from "./youtube";

export const HomeComponent = () => (
  <>
    <div className={styles.container}>
      <h2>De boerepeirdfeesten</h2>
      <div className={styles.containeritem}>
        <Youtube />
      </div>
      <p>
        De boerepeirdfeesten zijn een evenement, in het leven geroepen door het
        wijkbestuur van Sellewie beneden. Trek de ruiterschoenen aan, neem het
        paard bij de hand, en kom in volle galop naar het chirolokaal!
      </p>
      <h2>Waar?</h2>
      <div className={styles.containeritem}>
        <Maps />
      </div>
      <h2>Programma</h2>
      <Schedule />
      <h2>Sponsors</h2>
    </div>
  </>
);
