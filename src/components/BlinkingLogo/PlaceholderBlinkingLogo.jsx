import * as s from './styles.module.scss';

export default function PlaceholderBlinkingLogo() {
  return (
    <div className={s.limiterWrapper}>
      <div className={s.wrapper}>
        <div className={s.overlay}>
          <img src="/lo-cafe-logo/lo.cafe-logo-full-on.webp" width="1372" />
        </div>
        <img src="/lo-cafe-logo/lo.cafe-logo-full-on.webp" width="1372" />
      </div>
    </div>
  );
}
