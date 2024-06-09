import styles from "./component.module.css";
import { Maps } from "./maps";
import { Schedule } from "./schedule";
import Sponsors from "./sponsors";
import { Youtube } from "./youtube";

export const HomeComponent = () => (
  <div className={styles.container}>
    <h2>De boerepeirdfeesten - tweede editie</h2>
    <div className={styles.containeritem}>
      <Youtube code="A9Y0zuhgLW4" />
    </div>
    <p>
      <b>De boerepeirdfeesten</b> zijn een evenement, in het leven geroepen door het
      wijkbestuur van Sellewie beneden. Trek de ruiterschoenen aan, neem het
      paard bij de hand, en kom in volle galop naar het buurthuis van Sellewie!
    </p>
    <h2>Waar?</h2>
    <div className={styles.containeritem}>
      <Maps />
    </div>
    <h2>Programma</h2>
    <Schedule />
    <h2>Eten & drinken</h2>
    <p>Er worden <b>frituurhapjes</b> voorzien, samen met een drankje</p>
    <h2>Sponsors</h2>
    <Sponsors />
  </div>
);
