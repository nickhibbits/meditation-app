import "../styles/timer.css";
function SelectDuration({ setTime, handleStart }) {
  return (
    <main className="select-duration-component">
      <form name="duration-range" className="duration-range">
        <label htmlFor="duration-range">Select Duration</label>
        <input
          type="range"
          id="duration-input"
          onChange={(e) => setTime(e.target.value)}
          min="0"
          max="3600"
        ></input>
        <button onClick={() => handleStart(true)}>Begin</button>
      </form>
    </main>
  );
}

export default SelectDuration;
