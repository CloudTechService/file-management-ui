import React from "react";
import "../../assets/css/datasetlogs.css";
import BackIcon from "../../assets/images/icons/back.svg";
import DownloadIcon from "../../assets/images/icons/download.svg";
import LeftIcon from "../../assets/images/icons/Chevron left.svg";
import RightIcon from "../../assets/images/icons/Chevron right.svg";
import { IoMdSearch } from "react-icons/io";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function FileDetails() {
  return (
    <>
      <div className="dataset-record-wrapper p-3">
        <div className="dataset-content-wrapper d-flex justify-content-between flex-wrap mb-3">
          <div className="d-flex gap-3">
            <p className="high-light d-flex mt-1">
              <img src={BackIcon} alt="" className="me-1" />
              Back
            </p>
            <h4>Dataset Record </h4>
          </div>

          <button className="high-light">
            <img src={DownloadIcon} alt="" className="me-2" />
            Export
          </button>
        </div>

        {/* <div className="logs d-flex justify-content-between mb-3">
          <div className=" d-flex">
            <div className="all d-flex me-5">
              <p className="high-light">All</p>
              <p className="circle ms-2">400</p>
            </div>

            <div className="primary-member-wrapper d-flex">
              <span className="">Primmary Member</span>
              <p className=" ms-3">396</p>
            </div>
          </div>

          <div className="search-wrapper">
            <input className="input-field" placeholder="Search" />
            <div className="icon-wrapper">
              <img src={SearchIcon} alt="" />
            </div>
            
        </div> */}
        <div className="logs d-flex justify-content-between flex-wrap mt-4 mb-4">
          <div className=" d-flex ">
            <div className="all-content-wrapper d-flex me-5 gap-1">
              <span className="mt-2">All</span>
              <p className=" ms-2 mt-2">400</p>
            </div>

            <div className="primary-member-wrapper d-flex">
              <span className="mt-2">Primmary Member</span>
              <p className=" ms-2 mt-2">396</p>
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
          </div>
        </div>

        <div className="table-container">
          <table>
            <tr>
              <th>POLICY ID</th>
              <th>USER ID</th>
              <th>NAME</th>
              <th>SSN</th>
              <th>PLANS</th>
              <th>TIER</th>
              <th>EFFECTIVE DATE</th>
              <th>EFFECTIVE DATE</th>
            </tr>
            <tr>
              <td className="active">66978</td>
              <td>1515</td>
              <td>Carlos Marcos</td>
              <td>XXX-XX-1255</td>
              <td>SA DENTAL PLAN</td>
              <td>IF</td>
              <td>01/02/2022</td>
              <td>01/02/2022</td>
            </tr>

            <tr>
              <td className="active">56632</td>
              <td>15156</td>
              <td>Trony Leach</td>
              <td>XXX-XX-1256</td>
              <td>SA DENTAL PLAN</td>
              <td>IO</td>
              <td>01/02/2022</td>
              <td>01/02/2022</td>
            </tr>

            <tr>
              <td className="active">1233</td>
              <td>2252</td>
              <td>Michale pea</td>
              <td>XXX-XX-1278</td>
              <td>SA VISON</td>
              <td>IO</td>
              <td>01/02/2022</td>
              <td>01/02/2022</td>
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

export default FileDetails;
