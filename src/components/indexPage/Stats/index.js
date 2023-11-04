import Image from "next/image";
import Marquee from "react-fast-marquee";

import NiceVideo from "~/components/NiceVideo";
import InfoSection from "~/components/InfoSection";

import s from "./styles.module.scss";

const Stats = () => (
  <div className="section">
    <div className="container">
      <InfoSection
        darkIcon
        color="#FFFA81"
        icon="􀋃"
        title="And Winston is getting famous!"
        description="Take a look at some numbers!"
      />
      <div className={s.statsWrapper}>
        <Stat number="10K" color="#FFFA81" label="Testflight Users" />
        <Stat number="2,2K" color="#6570F6" label="Discord Members" />
        <Stat number="100+" color="#CE5151" label="Github Issues 🤡" />
      </div>
    </div>
  </div>
);

export default Stats;

const Stat = ({ number, color, label }) => (
  <div className={s.statWrapper}>
    <div className={s.statNumber} style={{ color: color }}>
      {number}
    </div>
    <p>{label}</p>
  </div>
);
