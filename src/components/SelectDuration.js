import "../styles/timer.css";
function SelectDuration({ setTime }) {
  return (
    <main className="select-duration-component">
      <form name="duration-range">
        <label for="duration-range">Select Duration</label>
        <input
          type="range"
          id="duration-input"
          onChange={(e) => setTime(e.target.value)}
          min="0"
          max="60"
        ></input>
      </form>
    </main>
  );
}

export default SelectDuration;
