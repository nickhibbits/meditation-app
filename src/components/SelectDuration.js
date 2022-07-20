// import { useRef } from "react";
import "../styles/timer.css";
function SelectDuration({ setTime, setTimerOn }) {
  // const ref = useRef(0);

  return (
    <main className="select-duration-component">
      <form name="duration-range" className="duration-range">
        <label htmlFor="duration-range">Select Duration</label>
        <input
          // ref={ref}
          type="range"
          id="duration-input"
          onChange={(e) => setTime(e.target.value)}
          min="0"
          max="3600"
        ></input>
        <button onClick={() => setTimerOn(true)}>Begin</button>
      </form>
    </main>
  );
}

export default SelectDuration;
