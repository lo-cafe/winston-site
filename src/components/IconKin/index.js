import s from "./styles.module.scss";

const IconKin = ({ children, color, darkIcon }) => (
  <div className={s.iconKin} style={{ color: darkIcon ? "#000" : "#fff", backgroundColor: color }}>
    {children}
  </div>
);

export default IconKin;
