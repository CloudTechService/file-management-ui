import React from "react";

function Overview() {
  return (
    <>
      <div className="dash-container">
        {/* Overview */}
        <div className="mb-4 pb-2">
          <h3 className="mb-3 pb-1 pt-2">Overview</h3>
          <div className="row">
            <div className="col-md-3">
              <div className="overview-card">
                <h6 className="">Approved Data</h6>
                <div className="d-flex align-items-end">
                  <h3 className="mb-0">1,745</h3>
                  <span className="approved-data me-2 ms-2"> +145</span>
                  <span className="overview-txt"> Last Week</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="overview-card">
                <h6 className="">Declined Data</h6>
                <div className="d-flex align-items-end">
                  <h3 className="mb-0">274</h3>
                  <span className="failed-data me-2 ms-2"> -70</span>
                  <span className="overview-txt"> Last Week</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="overview-card">
                <h6 className="">Pending Data</h6>
                <div className="d-flex align-items-end">
                  <h3 className="mb-0">28</h3>
                  <span className="approved-data me-2 ms-2"> +0</span>
                  <span className="overview-txt"> Last Week</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="overview-card">
                <h6 className="">New Dataset</h6>
                <div className="d-flex align-items-end">
                  <h3 className="mb-0">6</h3>
                  <span className="approved-data me-2 ms-2"> +2</span>
                  <span className="overview-txt"> Last Week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
