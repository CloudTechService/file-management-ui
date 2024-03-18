import React from "react";
import Avatar from "../../../assets/images/avatar.png";
import { BsDatabase } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsArrowUpCircle } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
function Dataset() {
  return (
    <>
      <div className="dash-container">
        <div className="">
          <h3>Dataset Summary</h3>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="overview-card">
                <div className="card-head">
                  <div className="d-flex align-items-end">
                    <div>
                      <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Elevate Audi</h6>
                      <h6 className="mb-0">-</h6>
                    </div>
                  </div>
                  <div className="expand">Expand</div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center mb-1">
                      <BsDatabase
                        style={{ color: "#6B7280", marginRight: "6px" }}
                      />
                      Dataset
                    </div>
                    <div className="mb-1">
                      <BsArrowDownCircle
                        style={{ color: "#188A42", marginRight: "6px" }}
                      />
                      Inbound Details
                    </div>
                    <div className="mb-1">
                      <BsArrowUpCircle
                        style={{ color: "#EE4444", marginRight: "6px" }}
                      />
                      Outbound Details
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="file-pill mb-1">
                      <div className="files-dot "></div>Files
                    </div>
                    <div className="mb-1">5000</div>
                    <div className="mb-1">20 </div>
                  </div>
                  <div className="col-md-3">
                    <div className="api-pill mb-1">
                      <div className="api-dot"></div>API
                    </div>
                    <div className="mb-1">2000</div>
                    <div className="mb-1">18</div>
                  </div>
                  <div className="col-md-3">
                    <div className="email-pill mb-1">
                      <div className="email-dot"></div>Email
                    </div>
                    <div className="mb-1">2000</div>
                    <div className="mb-1">18</div>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="data-foot">
                        <BsDatabase
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />
                        Dataset Record
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="data-foot">
                        <AiOutlineUnorderedList
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />{" "}
                        Dataset Log
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="data-foot">
                        <AiOutlineDownload
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />
                        Download Report
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="overview-card">
                <div className="card-head">
                  <div className="d-flex align-items-end">
                    <div>
                      <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Elevate Audi</h6>
                      <h6 className="mb-0">-</h6>
                    </div>
                  </div>
                  <div className="expand">Expand</div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center mb-1">
                      <BsDatabase
                        style={{ color: "#6B7280", marginRight: "6px" }}
                      />
                      Dataset
                    </div>
                    <div className="mb-1">
                      <BsArrowDownCircle
                        style={{ color: "#188A42", marginRight: "6px" }}
                      />
                      Inbound Details
                    </div>
                    <div className="mb-1">
                      <BsArrowUpCircle
                        style={{ color: "#EE4444", marginRight: "6px" }}
                      />
                      Outbound Details
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="file-pill mb-1">
                      <div className="files-dot "></div>Files
                    </div>
                    <div className="mb-1">5000</div>
                    <div className="mb-1">20 </div>
                  </div>
                  <div className="col-md-3">
                    <div className="api-pill mb-1">
                      <div className="api-dot"></div>API
                    </div>
                    <div className="mb-1">2000</div>
                    <div className="mb-1">18</div>
                  </div>
                  <div className="col-md-3">
                    <div className="email-pill mb-1">
                      <div className="email-dot"></div>Email
                    </div>
                    <div className="mb-1">2000</div>
                    <div className="mb-1">18</div>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="data-foot">
                        <BsDatabase
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />
                        Dataset Record
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="data-foot">
                        <AiOutlineUnorderedList
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />{" "}
                        Dataset Log
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="data-foot">
                        <AiOutlineDownload
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />
                        Download Report
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="overview-card">
                <div className="card-head">
                  <div className="d-flex align-items-end">
                    <div>
                      <img src={Avatar} alt="avatar" />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-0">Elevate Audi</h6>
                      <h6 className="mb-0">-</h6>
                    </div>
                  </div>
                  <div className="expand">Expand</div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-3">
                    <div className="d-flex align-items-center mb-1">
                      <BsDatabase
                        style={{ color: "#6B7280", marginRight: "6px" }}
                      />
                      Dataset
                    </div>
                    <div className="mb-1">
                      <BsArrowDownCircle
                        style={{ color: "#188A42", marginRight: "6px" }}
                      />
                      Inbound Details
                    </div>
                    <div className="mb-1">
                      <BsArrowUpCircle
                        style={{ color: "#EE4444", marginRight: "6px" }}
                      />
                      Outbound Details
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="file-pill mb-1">
                      <div className="files-dot "></div>Files
                    </div>
                    <div className="mb-1">5000</div>
                    <div className="mb-1">20 </div>
                  </div>
                  <div className="col-md-3">
                    <div className="api-pill mb-1">
                      <div className="api-dot"></div>API
                    </div>
                    <div className="mb-1">2000</div>
                    <div className="mb-1">18</div>
                  </div>
                  <div className="col-md-3">
                    <div className="email-pill mb-1">
                      <div className="email-dot"></div>Email
                    </div>
                    <div className="mb-1">2000</div>
                    <div className="mb-1">18</div>
                  </div>
                </div>
                <div className="card-bottom">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="data-foot">
                        <BsDatabase
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />
                        Dataset Record
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="data-foot">
                        <AiOutlineUnorderedList
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />{" "}
                        Dataset Log
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="data-foot">
                        <AiOutlineDownload
                          style={{ color: "#0972BB", marginRight: "6px" }}
                        />
                        Download Report
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dataset;
