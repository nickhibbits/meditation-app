import { useState, useRef, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import SelectDuration from "./SelectDuration";

import "../styles/timer.css";
function Timer() {
  const timerOn = useRef(false);
  const _time = useRef(0);

  const handleChange = (duration) => {
    _time.current = duration;
    console.log("time.current", _time.current);
  };

  const setTimerOn = () => {
    timerOn.current = true;
  };

  // useEffect(() => {
  //   if (_time.current !== 0) {
  //     console.log("_time", _time);
  //     setTime(_time.current);
  //   }
  // }, [_time]);

  function formatTime({ remainingTime }) {
    console.log("remainingTime", remainingTime);
    const minutes = Math.floor(remainingTime / 60);

    return (
      <div className="minutes-wrapper">
        <div>{minutes}</div>
        <div className="minutes-label">Minutes</div>
      </div>
    );
  }

  return (
    <div className="timer-component">
      <SelectDuration setTime={handleChange} setTimerOn={setTimerOn} />
      <div className="circle-timer-wrapper">
        <CountdownCircleTimer
          size={550}
          strokeWidth={30}
          isPlaying={timerOn.current}
          duration={_time.current}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
          children={formatTime}
        >
          {formatTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Timer;
