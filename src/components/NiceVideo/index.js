import cs from "classnames";

import s from "./styles.module.scss";

const NiceVideo = ({ aspectRatio, src, height, className, style, ...rest }) => (
  <div
    className={cs(s.niceVideo, className)}
    style={{ height: height ?? "100%", ...style }}
    {...rest}
  >
    <video
      playsInline="true"
      autoPlay="true"
      muted="true"
      loop="true"
      preload="auto"
      style={{ aspectRatio: aspectRatio ?? "9/16" }}
    >
      <source src={`/videos/${src}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default NiceVideo;
