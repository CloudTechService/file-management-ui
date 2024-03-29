import React from "react";
import "../../assets/css/datasetlogs.css";

import MicIcon from "../../assets/images/icons/mic.svg";
import FilesIcon from "../../assets/images/icons/files.svg";
import ApiBlueIcon from "../../assets/images/icons/apiblue.svg";
import EmailIcon from "../../assets/images/icons/email.svg";
import LeftIcon from "../../assets/images/icons/Chevron left.svg";
import RightIcon from "../../assets/images/icons/Chevron right.svg";

import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowUpCircle } from "react-icons/bs";
import { BsArrowDownCircle } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

import Dropdown from "react-bootstrap/Dropdown";

function DataSetLog() {
  return (
    <>
      <div className="Dataset-wrapper p-3">
        <h3>Dataset Logs</h3>

        <div className=" logs d-flex justify-content-between flex-wrap mt-4 mb-4">
          <div className=" d-flex flex-wrap ">
            <div className="d-flex me-5 gap-1">
              <img src={MicIcon} alt="" />
              <span className="pt-2">All</span>
            </div>

            <div className="d-flex me-5 gap-1">
              <img src={FilesIcon} alt="" />
              <span className="pt-2">Files</span>
            </div>

            <div className="ApiIcon d-flex me-5 gap-1">
              <img src={ApiBlueIcon} alt="" />
              <span className="pt-2">APIs</span>
            </div>

            <div className="d-flex me-5 gap-1">
              <img src={EmailIcon} alt="" />
              <span className="pt-2">Email</span>
            </div>
          </div>

          <div className="search-wrapper">
            <input className="input-field" placeholder="Search" />
            <div className="icon-wrapper">
              <IoMdSearch
                style={{
                  color: "#9ca3af",
                  marginRight: "6px",
                  height: "20px",
                  width: "20px",
                }}
              />
            </div>
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          </div>
        </div>

        <div className="d-flex flex-wrap mb-3">
          <Dropdown className="me-4">
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Select Dataset Type
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-2">
              <Dropdown.Item href="#/action-1">Incoming</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Outgoing</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="">
            <Dropdown.Toggle variant="" id="dropdown-basic">
              Select Dataset Status
            </Dropdown.Toggle>

            <Dropdown.Menu className="mt-2">
              <Dropdown.Item href="#/action-1">All</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Processed</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Not Processed</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Deleted</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="table-container">
          <table>
            <tr>
              <th>Filename</th>
              <th>Dataset Type</th>
              <th>Downloaded</th>
              <th>Received date</th>
              <th>No of Records</th>
              <th>File Size</th>
              <th>Received Via</th>
              <th>Status</th>
              <th>Download</th>
              <th>Action</th>
            </tr>
            <tr>
              <td className="active">File_elascicat_2023.xls</td>
              <td>
                <div className="mb-1">
                  <BsArrowDownCircle
                    style={{ color: "#188A42", marginRight: "6px" }}
                  />
                  In
                </div>
              </td>
              <td>1 times</td>
              <td>02/02/2022</td>
              <td>1</td>
              <td>2kb</td>
              <td>API</td>
              <td>Processed</td>
              <td className="high-light">
                <MdOutlineFileDownload
                  style={{ marginRight: "4px", height: "20px", width: "20px" }}
                />
                Download
              </td>
              <td className="high-light">View Detail</td>
            </tr>
            <tr>
              <td className="active">File_elascicat_2022.xls</td>
              <td>
                <div className="mb-1">
                  <BsArrowUpCircle
                    style={{ color: "#EE4444", marginRight: "6px" }}
                  />
                  Out
                </div>
              </td>
              <td>0 times</td>
              <td>02/02/2022</td>
              <td>25</td>
              <td>20mb</td>
              <td>API</td>
              <td>Processed</td>
              <td className="high-light">
                <MdOutlineFileDownload
                  style={{ marginRight: "4px", height: "20px", width: "20px" }}
                />
                Download
              </td>
              <td className="high-light">View Detail</td>
            </tr>
            <tr>
              <td className="active">File_elascicat_2022.xls</td>
              <td>
                <div className="mb-1">
                  <BsArrowDownCircle
                    style={{ color: "#188A42", marginRight: "6px" }}
                  />
                  In
                </div>
              </td>
              <td>0 times</td>
              <td>02/02/2022</td>
              <td>1202</td>
              <td>120kb</td>
              <td>API</td>
              <td>Processed</td>
              <td className="high-light">
                <MdOutlineFileDownload
                  style={{ marginRight: "4px", height: "20px", width: "20px" }}
                />
                Download
              </td>
              <td className="high-light">View Detail</td>
            </tr>
          </table>
        </div>

        <div className="box mt-4  ">
          <div className="ms-3 me-3 d-flex justify-content-between flex-wrap">
            <span className="mt-3">Showing 1 to 3 of 97 results</span>

            <div className="mt-3">
              <button>
                <MdKeyboardArrowLeft
                  style={{
                    color: "#6b7280",
                    height: "20px",
                    width: "20px",
                  }}
                />
              </button>
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>8</button>
              <button>9</button>
              <button>10</button>
              <button>
                <MdKeyboardArrowRight
                  style={{
                    color: "#6b7280",
                    height: "20px",
                    width: "20px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataSetLog;
