import { useMemo, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import SelectDuration from "./SelectDuration";

import "../styles/timer.css";
function Timer() {
  const [time, setTime] = useState(0);

  const _time = useMemo(() => {
    return time;
  }, [time]);

  const [timerOn, setTimerOn] = useState(false);

  function formatTime({ remainingTime }) {
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
      <SelectDuration setTime={setTime} handleStart={setTimerOn} />
      <div className="circle-timer-wrapper">
        <CountdownCircleTimer
          size={550}
          strokeWidth={30}
          isPlaying={timerOn}
          duration={_time}
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
