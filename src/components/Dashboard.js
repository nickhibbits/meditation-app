import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-component">
      <Link className="meditate-button" to="/timer">
        MEDITATE
      </Link>
    </div>
  );
}

export default Dashboard;
