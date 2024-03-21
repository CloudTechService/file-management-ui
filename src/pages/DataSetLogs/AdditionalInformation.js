import { useState } from "react";
import "../../assets/css/datasetlogs.css";
import "../../assets/css/modal.css";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../assets/css/datasetlogs.css";
import BackIcon from "../../assets/images/icons/back.svg";
import DownloadIcon from "../../assets/images/icons/download.svg";
// import LeftIcon from "../../assets/images/icons/Chevron left.svg";
// import RightIcon from "../../assets/images/icons/Chevron right.svg";
// import SearchIcon from "../../assets/images/icons/Search.svg";
import { IoMdSearch } from "react-icons/io";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dataset-record-primary-wrapper p-3">
        <div className="dataset-content-wrapper d-flex justify-content-between flex-wrap mb-3">
          <div className="d-flex gap-3">
            <p className="high-light d-flex mt-1">
              <img src={BackIcon} alt="" className="me-1" />
              Back
            </p>
            <h4>Dataset Record Page </h4>
          </div>

          <button className="high-light">
            <img src={DownloadIcon} alt="" className="me-2" />
            Export
          </button>
        </div>

        <div className="logs d-flex justify-content-between flex-wrap mt-4 mb-4">
          <div className="d-flex ">
            <div className="all-content-wrapper d-flex me-5 gap-1">
              <span className="mt-2">All</span>
              <p className="ms-2 mt-2">400</p>
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
              <th></th>
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
              <td className="high-light" onClick={handleShow}>
                View Details
              </td>
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
              <td className="high-light" onClick={handleShow}>
                View Details
              </td>
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
              <td className="high-light" onClick={handleShow}>
                View Details
              </td>
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

      <div className="modal">
        <Modal
          size="lg"
          className="ms-4 width:900px"
          show={show}
          onHide={handleClose}
        >
          <Modal.Header className="heading-wrapper d-grid ">
            <Modal.Title className="heading">
              Additional Information
            </Modal.Title>
            <p>Additional information of individual or dependent listing</p>
          </Modal.Header>

          <Modal.Body>
            <div className="row ">
              <div className="col-md-4">
                <div className="mb-4">
                  <h6>Name</h6>
                  <p>Anita Railey</p>
                </div>

                <div>
                  <h6>DOB</h6>
                  <p>20/02/1988</p>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="mb-4">
                  <h6>Address</h6>
                  <p>6569 Randy Lane</p>
                </div>

                <div>
                  <h6>City</h6>
                  <p>Ellenwood</p>
                </div>
              </div>

              <div className="col-md-4 ">
                <div className="mb-4">
                  <h6>State</h6>
                  <p>GA</p>
                </div>

                <div>
                  <h6>Phone</h6>
                  <p>656-5656-656</p>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <h5>Dependent #1</h5>
              <div className="col-md-4">
                <div className="mb-4">
                  <h6>Policy ID</h6>
                  <p>54555</p>
                </div>

                <div>
                  <h6>Name</h6>
                  <p>Anjila Ray</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <h6>User ID</h6>
                  <p>2323</p>
                </div>

                <div>
                  <h6>DOB</h6>
                  <p>02/03/2002</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-4">
                  <h6>Relation</h6>
                  <p>Daughter</p>
                </div>

                <div>
                  <h6>Pregnant</h6>
                  <p>No</p>
                </div>
              </div>
            </div>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary">Done</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default Example;
