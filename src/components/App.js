import { Route, Routes } from "react-router-dom";

import Dashboard from "./Dashboard";
import Stats from "./Stats";
import Timer from "./Timer";

function App() {
  return (
    <div className="app-component">
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/stats" exact element={<Stats />} />
        <Route path="/timer" exact element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
