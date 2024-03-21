import React from "react";
import Avatar from "../../assets/images/icons/Avatar.svg";
import Vector from "../../assets/images/icons/Vector.svg";
import Vector2 from "../../assets/images/icons/Vector2.svg";
import Vector3 from "../../assets/images/icons/Vector3.svg";
import "../../assets/css/datasetlogs.css";

function Dataset() {
  return (
    <>
      <div className="p-3 d-flex">
        <h4 className="mt-4 mb-3">Dataset</h4>

        <div className="Elevate-Audi-wrapper ps-3 pe-3">
          <div className="pt-3  d-flex justify-content-between">
            <div className="d-flex mb-3">
              <img src={Avatar} alt="Avatar icon" className="me-4" />
              <h6>
                Elevate Audi <br /> -
              </h6>
            </div>

            <div>
              <p className="high-light">Expand</p>
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-md-3">
              <div className="d-flex align-items-center mb-1">Dataset</div>

              <div className="mb-1">Inbound Details</div>
              <div className="mb-1">Outbound Details</div>
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
              <div className="mb-1">5000</div>
              <div className="mb-1">20</div>
            </div>
            <div className="col-md-3">
              <div className="email-pill mb-1">
                <div className="email-dot"></div>Email
              </div>
              <div className="mb-1">5000</div>
              <div className="mb-1">20</div>
            </div>
          </div>

          {/* <table>
            <tr>
              <td className="me-5">
                <img src={Vector} alt="Vector icon" className="" />
                Dataset
              </td>
              <span className="">
                <td>Files</td>
                <td>Api</td>
                <td>Email</td>
              </span>
            </tr>
            <tr>
              <td>
                <img src={Vector2} alt="Vector icon" className="" />
                Inbound Details
              </td>

              <span className="">
                <td className="">5000</td>
                <td>5000</td>
                <td>5000</td>
              </span>
            </tr>

            <tr>
              <td>
                <img src={Vector3} alt="Vector icon" className="" />
                Outbound Details
              </td>

              <span className="">
                <td className="ms-5">20</td>
                <td className="ms-5">20</td>
                <td className="ms-5">20</td>
              </span>
            </tr>
          </table> */}
          {/* <tr>
            <td className="me-5">
              <img src={Vector} alt="Vector icon" className="" />
              Dataset
            </td>
            <td className="ms-4">Files</td>
            <td>Api</td>
            <td>Email</td>
          </tr>

          <tr>
            <td>
              <img src={Vector2} alt="Vector icon" className="" />
              Inbound Details
            </td>
            <td className="ms-2">5000</td>
            <td>5000</td>
            <td>5000</td>
          </tr>

          <tr>
            <td>
              <img src={Vector3} alt="Vector icon" className="" />
              Outbound Details
            </td>
            <td className="ms-1">20</td>
            <td>20</td>
            <td>20</td>
          </tr> */}

          {/* 
          <tr>
            <td>
              <img src={Vector} alt="Vector icon" className="" />
              Dataset
            </td>
            <ul className="">
              <td>Files</td>
              <td>Api</td>
              <td>Email</td>
            </ul>
          </tr>

          <tr>
            <td>
              <img src={Vector2} alt="Vector icon" className="" />
              Inbound Details
            </td>
            <ul>
              <td>5000</td>
              <td>5000</td>
              <td>5000</td>
            </ul>
          </tr>

          <tr>
            <td>
              <img src={Vector3} alt="Vector icon" className="" />
              Outbound Details
            </td>
            <ul>
              <td>20</td>
              <td>20</td>
              <td>20</td>
            </ul>
          </tr> */}

          {/* <div className="d-flex">
            <div className="d-flex">
              <img src={Vector} alt="Vector icon" className="" />
              <p>Inbound Details</p>
            </div>

            <ul className="d-flex">
              <li className="ms-5">5000</li>
              <li className="ms-5">5000</li>
              <li className="ms-5">5000</li>
            </ul>
          </div> */}
        </div>

        <div className="Elevate-Audi-wrapper ps-3 pe-3">
          <div className="pt-3  d-flex justify-content-between">
            <div className="d-flex mb-3">
              <img src={Avatar} alt="Avatar icon" className="me-4" />
              <h6>
                Elevate Audi <br /> -
              </h6>
            </div>

            <div>
              <p className="high-light">Expand</p>
            </div>
          </div>

          <div className="row mt-3 mb-3">
            <div className="col-md-3">
              <div className="d-flex align-items-center mb-1">Dataset</div>

              <div className="mb-1">Inbound Details</div>
              <div className="mb-1">Outbound Details</div>
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
              <div className="mb-1">5000</div>
              <div className="mb-1">20</div>
            </div>
            <div className="col-md-3">
              <div className="email-pill mb-1">
                <div className="email-dot"></div>Email
              </div>
              <div className="mb-1">5000</div>
              <div className="mb-1">20</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dataset;
