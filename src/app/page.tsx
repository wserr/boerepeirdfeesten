import { HomeComponent } from "./components/home";
import { Nav } from "./components/nav";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Nav />
      <section className={styles.content}>
        <HomeComponent />
      </section>
      <body />
    </main>
  );
}
