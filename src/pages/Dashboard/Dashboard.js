import React from "react";
import "../../assets/css/dashboard.css"
import Overview from "./partials/Overview";
import Dataset from "./partials/Dataset";

function Dashboard() {
  return (
    <>
      <div className="dash-container">
        <Overview />
        <Dataset />
      </div>
    </>
  );
}

export default Dashboard;
