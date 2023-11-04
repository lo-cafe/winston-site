import s from "./styles.module.scss";

import IconKin from "~/components/IconKin";

const InfoSection = ({
  color,
  icon,
  title,
  description,
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
    <p className={s.silentP}>{description}</p>
  </div>
);

export default InfoSection;
