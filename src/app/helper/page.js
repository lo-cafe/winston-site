"use client";

import { useEffect, useState } from "react";
import Image from "next/navigation";
import { FaPatreon } from "react-icons/fa";
import { PiFanFill } from "react-icons/pi";
import { MdCoffee } from "react-icons/md";
import { FaJar } from "react-icons/fa6";
import { GiJumpingRope } from "react-icons/gi";
import { PiGithubLogoFill } from "react-icons/pi";

import styles from "./page.module.css";

export default function Home() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(location.pathname + location.search);
    console.log(location.pathname + location.search);
    // window.open(`winstonapp:/${window.location.pathname}`)
  }, []);

  return (
    <main className={styles.main}>
      <div>
        <img
          alt="Winston Logo"
          src="/transparent-winston.png"
          width="128"
          height="128"
        />
        <h2>{url == "/" ? "Hello! I&apos;m Winston!" : "Winston got ya"}</h2>
        {
         url == "/" && (
            <>
                          <strong>Nice to meet ya.</strong>
              <p>
                Winston is an in-development free and open-source bot for Reddit
                (therefore within the Reddit&apos;s ToS) with a nice interface for
                iOS.
              </p>
            </>
          )
        }
        <div className={styles.buttonsWrapper}>
          {url == "/" ? (
            <>
              <a
                target="_blank"
                className={styles.nice}
                href="https://testflight.apple.com/join/3UF8bAUN"
              >
                <PiFanFill />
                TestFlight
              </a>
              <a target="_blank" className={styles.nice} href="https://lo.cafe">
                <MdCoffee />
                lo.cafe (us)
              </a>
              <a
                target="_blank"
                className={styles.nice}
                href="https://patreon.com/user?u=93745105"
              >
                <FaPatreon /> Patreon
              </a>
              <a
                target="_blank"
                className={styles.nice}
                href="https://ko-fi.com/locafe"
              >
                <FaJar />
                Tip jar
              </a>
              <a
                target="_blank"
                className={styles.nice}
                href="https://github.com/Kinark/winston"
              >
                <PiGithubLogoFill />
                Github
              </a>
            </>
          ) : (
            <a className={styles.nice} href={`winstonapp:/${url}`}>
              <GiJumpingRope />
              Jump to Winston
            </a>
          )}
        </div>
      </div>
      <img className={styles.bg} src="/james-webb.jpg" alt="" />
    </main>
  );
}
