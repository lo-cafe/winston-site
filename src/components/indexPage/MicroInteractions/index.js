import Image from "next/image";
import cs from "classnames";
import { PiHandHeartDuotone } from "react-icons/pi";

import NiceVideo from "~/components/NiceVideo";
import InfoSection from "~/components/InfoSection";

import s from "./styles.module.scss";

import winstonFace from "~/assets/face-transparent.png";

const MicroInteractions = () => (
  <div className="section">
    <div className={cs("container", s.containerHelper)}>
      <div className="sideBySide">
        <div className={s.vidsWrapper}>
          <div className={s.vidsColumn}>
            <NiceVideo
              className={s.videoHelper}
              src="micro-interactions/reply"
              aspectRatio="0.71/1"
              style={{
                maxWidth: 300,
                width: "100%"
              }}
            />
            <div className={cs(s.placeholder, "disappearOn1024")}>
              <div className={s.placeholderTitleWrapper}>
                <Image src={winstonFace} width={77} height={77} alt="Winston" />
                <div>
                  <h5>BOOM!</h5>
                  <p>There&apos;s nothing else to show here.</p>
                </div>
              </div>
              <p>
                Unfortunately this is a placeholder item. Placeholder in the
                sense of something that occupies space, but not a{" "}
                <span className="semibold">purpose</span>. Placeholder can also
                be a very philopsophical matter in the sense of who we are.{" "}
                <span className="semibold">Are we placeholders?</span> Or
                maybe...
              </p>
            </div>
          </div>
          <div className={s.vidsColumn}>
            <NiceVideo
              className={s.videoHelper}
              src="micro-interactions/loadMore"
              width="300px"
              aspectRatio="2/1"
              style={{
                maxWidth: 300,
                width: "100%"
              }}
            />
            <NiceVideo
              className={s.videoHelper}
              src="micro-interactions/postSave"
              width="300px"
              aspectRatio="1.32/1"
              style={{
                maxWidth: 300,
                width: "100%"
              }}
            />
            <NiceVideo
              className={s.videoHelper}
              src="micro-interactions/commentUpvote"
              width="300px"
              aspectRatio="1.31/1"
              style={{
                maxWidth: 300,
                width: "100%"
              }}
            />
          </div>
        </div>
        <InfoSection
          color="#76BBED"
          title="Handcrafted in every detail"
          description="We are a team of friends doing something we love just because we like it, of course we&apos;d spend countless hours trying to create the most useless and overcomplicated stuff there is just so the app can get cute."
          description2="For example, we ditched an entire feature of SwiftUI called ”swipe gestures” just to implement our own custom design with tiny little bubbles 🫧"
          align="right"
          width={480}
          icon={<PiHandHeartDuotone />}
        />
      </div>
    </div>
  </div>
);

export default MicroInteractions;
