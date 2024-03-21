import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../assets/css/modal.css";

function TwoFactorAuthentication() {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog size="lg">
        <Modal.Header closeButton className="">
          <div className="d-grid">
            <Modal.Title>Two-Factor authentication</Modal.Title>
            <p>
              Files requires you to protect your account with 2FA. How would you
              like to receive one-time password (OTPs?)
            </p>
          </div>
        </Modal.Header>

        <Modal.Body>
          <div className="card">
            <div className="d-flex">
              <input type="radio" className="me-2" />
              <span>
                <h6>Mobile App authenticator</h6>
                <p>
                  Use a mobile apple like Google Authenticator to generate
                  verification codes.
                </p>
              </span>
            </div>
          </div>

          <div className="card">
            <div className="d-flex">
              <input type="radio" className="me-2" />
              <span>
                <h6>Email</h6>
                <p>
                  Receive an verification code via email. Confirm your email is
                  ********654@gmail.com.
                </p>
              </span>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button>Continue</Button>
          <button>Cancek</button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default TwoFactorAuthentication;
