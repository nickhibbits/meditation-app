import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer() {
  const [time, setTime] = useState(0);

  return (
    <div className="timer-component">
      <CountdownCircleTimer
        isPlaying={time}
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
