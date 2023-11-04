import Image from "next/image";

import JetBrains from "~/components/JetBrains";

import s from "./styles.module.scss";
import winstonFlat from "~/assets/icons/winston.svg";

const LoCafe = () => (
  <div className={s.wrapper}>
    <div className={s.content}>
      <Image src={winstonFlat} width={56} height={56} alt="Winston logo" />
      <p>
        Winston is under
        <br />
        active development by:
      </p>
    </div>
    <a href="https://lo.cafe" target="_blank">
      <h1>
        <JetBrains>lo.cafe</JetBrains>
      </h1>
      <p>
        <JetBrains>
          welcome! have a sit, grab a coffee,
          <br />
          here&apos;s a safe place
        </JetBrains>
      </p>
    </a>
  </div>
);

export default LoCafe;
