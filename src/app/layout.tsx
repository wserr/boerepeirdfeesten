import { Inter } from "next/font/google";
import { Nav } from "./components/nav";
import "./globals.css";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Nav />
      <div className={styles.content}>
        <main>{children}</main>
      </div>
    </div>
  );
}
