import { Link } from "react-router-dom";

import "../styles/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-component">
      <div className="button-wrapper">
        <Link className="meditate-button" to="/timer">
          MEDITATE
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
