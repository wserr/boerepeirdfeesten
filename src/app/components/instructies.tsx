import styles from "./component.module.css";
import Sponsors from "./sponsors";
import { Youtube } from "./youtube";

export const InstructiesComponent = () => (
  <div className={styles.container}>
    <h2>Instructies - hoe maak ik een stokpaardje?</h2>
    <h3>TODO filmpje</h3>
    <div className={styles.containeritem}>
      <Youtube code="A9Y0zuhgLW4" />
    </div>
    <h2>Stappenplan</h2>
    <h3>TODO instructies nog verder aan te vullen</h3>
    <ol>
      <li>Stap 1</li>
      <li>Stap 2</li>
      <li>Stap 3</li>
    </ol>
    <h3>TODO download stokpaardje PDF</h3>
    <h2>Sponsors</h2>
    <Sponsors />
  </div>
);
