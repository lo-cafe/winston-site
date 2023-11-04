import Image from "next/image";
import cs from "classnames";
import { PiFanFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";

import NiceVideo from "~/components/NiceVideo";

import s from "./styles.module.scss";

import sideWinston from "~/assets/side-winston.png";

const Hero = () => (
  <div className="container">
    <div className={cs("sideBySide", s.sideBySideHelper)}>
      <div className={s.textColumn}>
        <div className={s.logoWrapper}>
          <Image priority={true} src={sideWinston} fill alt="Winston" />
        </div>
        <h1>Winston</h1>
        <h2>
          This changes <span className="striked">no</span>
          <span className="semibold">every</span>thing.
        </h2>

        <div className={s.buttonsWrapper}>
          <a className="button" href="">
            <span className="icon h">
              <PiFanFill size="1.5rem" /> Testflight
            </span>
          </a>
          <a className="button" href="">
            <span className="icon h">
              <AiFillGithub size="1.5rem" /> Github Repo
            </span>
          </a>
        </div>

        <div className={s.description}>
          Winston is an in-development open source design-focused iOS{" "}
          <span className="striked">client</span> developer tool for developers
          to test their own Reddit&apos;s API keys.
        </div>
      </div>
      <NiceVideo src="generalUseMockup" height="95vh" />
    </div>
  </div>
);

export default Hero;
