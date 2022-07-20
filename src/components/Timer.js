import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import SelectDuration from "./SelectDuration";

import "../styles/timer.css";
function Timer() {
  const [time, setTime] = useState(0);

  return (
    <div className="timer-component">
      <SelectDuration setTime={setTime} />
      <CountdownCircleTimer
        className="circle-timer"
        size={400}
        strokeWidth={30}
        isPlaying={false}
        duration={time}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default Timer;
