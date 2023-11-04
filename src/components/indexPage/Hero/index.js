import Image from "next/image";
import cs from "classnames";

import NiceVideo from "~/components/NiceVideo";

import s from "./styles.module.scss"

import sideWinston from "~/assets/side-winston.png";

const Hero = () => (
  <div className="container">
    <div className={cs("sideBySide", s.sideBySideHelper)}>
      <div className={s.textColumn}>
        <Image src={sideWinston} width={160} height={160} alt="Winston" />
        <h1>Winston</h1>
        <h2>
          This changes <span className="striked">no</span>
          <span className="semibold">every</span>thing.
        </h2>

        <div className={s.buttonsWrapper}>
          <a className="button" href="">􁌙 Testflight</a>
          <a className="button" href="">􂁿 Github Repo</a>
        </div>

        <div className={s.description}>
          Winston is an in-development open source design-focused iOS{" "}
          <span className="striked">client</span> developer tool for developers to test their
          own Reddit&apos;s API keys.
        </div>
      </div>
      <NiceVideo src="generalUseMockup" height="95vh" />
    </div>
  </div>
);

export default Hero;
