import React from "react";
import "../../assets/css/authentication.css";
import FileIcon from "../../assets/images/icons/files-icon.svg";

function Forgot() {
  return (
    <>
      <div className="sign-in-wrapper">
        <div className="sign-in-content">
          <div className="sign-in-container">
            <div className="ms-5">
              <div className="d-flex mb-4">
                <img src={FileIcon} alt="file icon" />
                <h2 className="signup-header">Files</h2>
              </div>

              <h5 className="mb-3">Create a Strong Password</h5>

              <div className="box-container">
                <ul>
                  <li>Must be at least 8 characters long.</li>
                  <li>
                    Should include a mix of uppercase and lowercase letters,
                    numbers, and special characters.
                  </li>
                </ul>
              </div>

              <form>
                <div className="mb-3">
                  <label className="mb-2">New Password</label>
                  <br />
                  <input className="input-field" />
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <label className="">Re-type Password</label>
                </div>
                <input className="input-field" />
              </form>

              <div>
                <button className="create-btn">Create Account</button>
                <p className="mb-0 mt-3">
                  If you are facing problems, please contact administrator{" "}
                  <br /> at{" "}
                  <span className="high-light">support@filesbydomain.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Forgot;
