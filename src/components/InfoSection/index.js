import s from "./styles.module.scss";

import IconKin from "~/components/IconKin";

const InfoSection = ({
  color,
  icon,
  title,
  description,
  description2,
  align,
  width,
  darkIcon,
}) => (
  <div
    className={s.wrapper}
    style={{ textAlign: align ?? "center", maxWidth: width ?? "unset" }}
  >
    {!!color && !!icon && (
      <IconKin color={color} darkIcon={darkIcon}>
        {icon}
      </IconKin>
    )}
    <h3>{title}</h3>
    <div className={s.descriptions}>
      <p className={s.silentP}>{description}</p>
      {!!description2 && <p className={s.silentP}>{description2}</p>}
    </div>
  </div>
);

export default InfoSection;
