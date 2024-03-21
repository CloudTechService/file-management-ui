import React from "react";
import "../../assets/css/datasetlogs.css";

import MicBlueIcon from "../../assets/images/icons/micblue.svg";
import FilesIcon from "../../assets/images/icons/files.svg";
import ApiIcon from "../../assets/images/icons/api.svg";
import EmailIcon from "../../assets/images/icons/email.svg";
import LeftIcon from "../../assets/images/icons/Chevron left.svg";
import RightIcon from "../../assets/images/icons/Chevron right.svg";
import DropdownIcon from "../../assets/images/icons/Chevron down.svg";

import { MdOutlineFileDownload } from "react-icons/md";
import { BsArrowDownCircle } from "react-icons/bs";
import { IoMdSearch } from "react-icons/io";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function DataSetLog() {
  return (
    <>
      <div className="Dataset-wrapper p-3">
        <h3>Dataset Logs</h3>

        <div className="logs d-flex justify-content-between flex-wrap mt-4 mb-4">
          <div className="d-flex flex-wrap ">
            <div className="MicIcon d-flex me-5 gap-1">
              <img src={MicBlueIcon} alt="" />
              <span className="pt-2">All</span>
            </div>

            <div className="d-flex me-5 gap-1">
              <img src={FilesIcon} alt="" />
              <span className="pt-2">Files</span>
            </div>

            <div className=" d-flex me-5 gap-1">
              <img src={ApiIcon} alt="" />
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
              />{" "}
            </div>
            {/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
          </div>
        </div>

        <div className="d-flex flex-wrap mb-3">
          <div className="incoming-wrapper me-4">
            <button
              class="btn "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Incoming
              <img src={DropdownIcon} alt="" className="ms-5" />
            </button>
          </div>

          <div className="select-date-status-wrapper">
            <button
              class="btn "
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Date Status
              <img src={DropdownIcon} alt="" className="ms-1" />
            </button>
          </div>
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
                <BsArrowDownCircle
                  style={{ color: "#188A42", marginRight: "6px" }}
                />
                In
              </td>
              <td>0 times</td>
              <td>02/02/2022</td>
              <td>25</td>
              <td>20mb</td>
              <td>Files</td>
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
                <BsArrowDownCircle
                  style={{ color: "#188A42", marginRight: "6px" }}
                />
                In
              </td>
              <td>0 times</td>
              <td>02/02/2022</td>
              <td>1202</td>
              <td>120kb</td>
              <td>Email</td>
              <td>Processed</td>
              <td className=" high-light">
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
