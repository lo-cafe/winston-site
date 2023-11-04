import Image from "next/image";
import Marquee from "react-fast-marquee";
import cs from "classnames";
import { PiPaintRollerDuotone } from "react-icons/pi";


import NiceVideo from "~/components/NiceVideo";
import InfoSection from "~/components/InfoSection";

import s from "./styles.module.scss";

import Img1 from "~/assets/themes-screenshots/1.PNG";
import Img2 from "~/assets/themes-screenshots/2.PNG";
import Img3 from "~/assets/themes-screenshots/3.PNG";
import Img4 from "~/assets/themes-screenshots/4.PNG";
import Img5 from "~/assets/themes-screenshots/5.PNG";
import Img6 from "~/assets/themes-screenshots/6.PNG";
import Img7 from "~/assets/themes-screenshots/7.PNG";
import Img8 from "~/assets/themes-screenshots/8.PNG";
import bgIcon from "~/assets/icons/bg-icon.svg";
import customIcon from "~/assets/icons/custom-icon.svg";
import editIcon from "~/assets/icons/edit-icon.svg";

const Themes = () => (
  <>
    <div className="container">
      <div className={cs("section", s.sectionHelper)}>
        <InfoSection
          color="#C85B5B"
          icon={<PiPaintRollerDuotone />}
          title="Ridiculous theming system"
          description="We wanted to make winston adapt you want it to be, so we made possible to
  edit virtually everything in the app, from the subs list to the settings
  screen, you can change everything."
          width={600}
        />
        <Marquee gradient gradientColor="#000" speed={15}>
          <Image className={s.niceImg} src={Img1} width={200} alt="" />
          <Image className={s.niceImg} src={Img2} width={200} alt="" />
          <Image className={s.niceImg} src={Img3} width={200} alt="" />
          <Image className={s.niceImg} src={Img4} width={200} alt="" />
          <Image className={s.niceImg} src={Img5} width={200} alt="" />
          <Image className={s.niceImg} src={Img6} width={200} alt="" />
          <Image className={s.niceImg} src={Img7} width={200} alt="" />
          <Image className={s.niceImg} src={Img8} width={200} alt="" />
        </Marquee>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <div className="sideBySide">
          <NiceVideo src="themesUseMockup" height="75vh" />
          <div className={s.infoSectionWrapper}>
            <InfoSection
              align="right"
              title="And if it&apos;s amazing, it should feel amazing as well"
              description="We didn&apos;t want to make theme editing a truggle or a technical thing, instead, we made a system that&apos;s simply a breeze to use."
            />
            <div className={s.featuresWrapper}>
              <Feature
                icon={bgIcon}
                description="Add custom images to the background of any screen."
              />
              <Feature
                icon={editIcon}
                description="Edit font properties of comments and posts."
              />
              <Feature
                icon={customIcon}
                description="Change accent, menu bar and anything&apos;s colors."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Themes;

const Feature = ({ icon, description }) => (
  <div className={s.featureWrapper}>
    <Image src={icon} height={32} alt="" />
    <p>{description}</p>
  </div>
);
