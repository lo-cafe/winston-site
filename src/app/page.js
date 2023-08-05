"use client";

import Image from "next/navigation";
import { usePathname } from "next/navigation";

import styles from "./page.module.css";

export default function Home() {
  const pathname = usePathname();
  return (
    <main className={styles.main}>
      <div>
        <img alt="Winston Logo" src="/transparent-winston.png" width="128" height="128" />
        <h2>Winston got ya</h2>
        <a className={styles.nice} href={`winstonapp:/${pathname}`}>
          Jump to Winston
        </a>
      </div>
      <img className={styles.bg} src="/james-webb.jpg" alt="" />
    </main>
  );
}
