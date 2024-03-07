import React from "react";
import "../../assets/css/authentication.css";
import SignInImg from "../../assets/images/sign-in-banner.svg";
import FileIcon from "../../assets/images/icons/files-icon.svg";

function SignIn() {
  return (
    <>
      <div className="sign-in-wrapper">
        <div className="sign-in-content">
          <div className="sign-in-container">
            {/* left side section */}
            <div className="me-5 ">
              <img src={SignInImg} alt="sign in"/>
            </div>
            {/* right side section */}
            <div className="ms-5">
              <div className="d-flex">
                <img src={FileIcon} alt="file icon"/>
                <h2 className="signup-header">Files</h2>
              </div>
              <p className="paragraph mt-3">
                There are many variations of passages of Lorem Ipsum available,
                in some form, by injected humour.
              </p>
              <form>
                <div className="mb-3">
                  <label className="mb-2">Email address</label>
                  <br />
                  <input className="input-field" />
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <label className="">Password</label>
                  <p className="mb-0">Forgot Password?</p>
                </div>
                <input className="input-field" />
              </form>
              <div className="mt-2">
                <input type="checkbox" className="me-2" />
                <span className="keep-login">Keep me logged in</span>
              </div>
              <div>
                <button className="login-btn">Login</button>
                <p className="mb-0 mt-3">New to CRM? <span className="high-light">Create new account</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
