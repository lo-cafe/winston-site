"use client";

import {useEffect, useState} from "react";
import Image from "next/navigation";

import styles from "./page.module.css";

export default function Home() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(window.location.pathname)
    // window.open(`winstonapp:/${window.location.pathname}`)
  }, []);
  
  return (
    <main className={styles.main}>
      <div>
        <img alt="Winston Logo" src="/transparent-winston.png" width="128" height="128" />
        <h2>Winston got ya</h2>
        <a className={styles.nice} href={`winstonapp:/${url}`}>
          Jump to Winston
        </a>
      </div>
      <img className={styles.bg} src="/james-webb.jpg" alt="" />
    </main>
  );
}
