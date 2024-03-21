import React from "react";
import "../../assets/css/datasetlogs.css";
import BackIcon from "../../assets/images/icons/back.svg";
import DownloadIcon from "../../assets/images/icons/download.svg";

function FileDetails() {
  return (
    <>
      <div className="files-details-wrapper p-3">
        <div className="files-content-wrapper d-flex justify-content-between flex-wrap">
          <div className="d-flex gap-3">
            <p className="high-light d-flex mt-1">
              <img src={BackIcon} alt="" className="me-1" />
              Back
            </p>
            <h4>File Details</h4>
          </div>

          <button className=" high-light">
            <img src={DownloadIcon} alt="" className="me-2" />
            Download
          </button>
        </div>

        <h6 className="mb-3">File_elascicat_2023.xls</h6>

        <div className="table-container">
          <table>
            <tr>
              <th>ID</th>
              <th>BENEFICIARY</th>
              <th>LAST NAME</th>
              <th>FIRST NAME</th>
              <th>MID NAME</th>
              <th>SSN</th>
              <th>STATUS</th>
              <th>DOB</th>
              <th>ADDRESS</th>
            </tr>
            <tr>
              <td className="active">1</td>
              <td>EMPLOYEE</td>
              <td>McLord</td>
              <td>John</td>
              <td>-</td>
              <td>212125252</td>
              <td>A</td>
              <td>03/02/1998</td>
              <td>132 StreetBigade</td>
            </tr>
            <tr>
              <td className="active">2</td>
              <td>DEPENDENT</td>
              <td>McLord</td>
              <td>Eric</td>
              <td>-</td>
              <td>22552252</td>
              <td>A</td>
              <td>03/01/1988</td>
              <td>152 132 StreetBigade</td>
            </tr>
            <tr>
              <td className="active">3</td>
              <td>EMPLOYEE</td>
              <td>McLord</td>
              <td>Cape</td>
              <td>-</td>
              <td>212124558</td>
              <td>B</td>
              <td>03/01/1988</td>
              <td>545 Braginhome</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default FileDetails;
