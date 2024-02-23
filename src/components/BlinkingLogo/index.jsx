'use client';
import { useEffect, useState } from 'react';
import * as s from './styles.module.scss';

const BlinkingLogo = () => {
  const [letterOActive, setLetterOActive] = useState(true);
  const [letterFEActive, setLetterFEActive] = useState(true);
  const [lettersActive, setLettersActive] = useState(true);
  const [decreasedDelay, setDecreasedDelay] = useState(0);

  function getImage() {
    if (!lettersActive)
      return (
        <img
          src="https://lo.cafe/lo-cafe-logo/lo.cafe-logo-full-off.webp"
          alt="lo.cafe logo"
        />
      );
    if (letterOActive) {
      if (letterFEActive) {
        return (
          <img
            src="https://lo.cafe/lo-cafe-logo/lo.cafe-logo-full-on.webp"
            alt="lo.cafe logo"
          />
        );
      } else {
        return (
          <img
            src="https://lo.cafe/lo-cafe-logo/lo.cafe-logo-fe-off.webp"
            alt="lo.cafe logo"
          />
        );
      }
    } else {
      if (letterFEActive) {
        return (
          <img src="https://lo.cafe/lo-cafe-logo/lo.cafe-logo-o-off.webp" alt="lo.cafe logo" />
        );
      } else {
        return (
          <img
            src="https://lo.cafe/lo-cafe-logo/lo.cafe-logo-o-fe-off.webp"
            alt="lo.cafe logo"
          />
        );
      }
    }
  }

  function randomize() {
    const letterORandom = Math.random() > 0.175;
    const letterFERandom = Math.random() > 0.1;
    const fullActiveRandom = Math.random() > 0.05;

    if (
      letterORandom == letterOActive &&
      letterFERandom == letterFEActive &&
      fullActiveRandom == lettersActive
    ) {
      setDecreasedDelay((old) => old + 1);
      return;
    }
    setDecreasedDelay(0);
    setLetterOActive(letterORandom);
    setLetterFEActive(letterFERandom);
    setLettersActive(fullActiveRandom);
  }

  function setRandomizeTimeout() {
    const allOn = letterOActive && letterFEActive && lettersActive;
    const nextRunActualRandomMs =
      Math.random() > 0.5
        ? Math.random() *
          Math.max(
            0,
            (allOn ? 1250 : lettersActive ? 750 : 500) - decreasedDelay * 150,
          )
        : Math.random() * 200;

    setTimeout(randomize, nextRunActualRandomMs);
  }

  useEffect(() => {
    setRandomizeTimeout();
  }, [decreasedDelay, letterOActive, letterFEActive, lettersActive]);

  return (
    <div className={s.limiterWrapper}>
      <div className={s.wrapper}>
        {<div className={s.overlay}>{getImage()}</div>}
        {getImage()}
      </div>
    </div>
  );
};

export default BlinkingLogo;

