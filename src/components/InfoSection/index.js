import s from "./styles.module.scss";

import IconKin from "~/components/IconKin";

const textAlignToAlignItems = {
  left: "flex-start",
  right: "flex-end",
  center: "center",
};

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
    style={{
      alignItems: textAlignToAlignItems[align] ?? "center",
      maxWidth: width ?? "unset",
      textAlign: align ?? "center",
    }}
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
