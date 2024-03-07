import React from "react";
import { GrSearch } from "react-icons/gr";
import { BsSun } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa6";
import Profile from "../assets/images/profile-pic.png";
function Header() {
  return (
    <>
      <div className="header">
        <div>
          <GrSearch />
          <span className="ms-2">Search</span>
        </div>
        <div className="d-flex align-items-center">
          <BsSun
            style={{
              color: "#9CA3AF",
              marginRight: "20px",
            }}
          />
          <FaRegBell
            style={{
              color: "#9CA3AF",
            }}
          />
          <div className="d-flex align-items-center ms-3">
            <div className="me-3">
              <img src={Profile} alt="profile" />
            </div>
            <div>
              <h6 className="mb-0">Wikket Sunny</h6>
              <p className="mb-0"> sunny@domain001.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
