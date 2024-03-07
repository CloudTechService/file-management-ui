import React from "react";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Logo from '../assets/images/icons/files-icon.svg'

import { IoHomeOutline, IoFolderOpenOutline } from "react-icons/io5";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { PiUserCircle } from "react-icons/pi";

function Menubar() {
  return (
    <ProSidebar breakPoint="lg" className="sideBar-menu">
      <SidebarHeader>
        <div className="siteLogo">
          <img src={Logo} alt="Logo" className='img-fluid' /><div className="file-txt"> Files</div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem icon={<IoHomeOutline />}>
            Dashboard
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<HiOutlineInboxArrowDown />}>
            Dataset
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<IoFolderOpenOutline />}>
            Dataset Record
            <Link to="/" />
          </MenuItem>
          <MenuItem icon={<PiUserCircle />}>
            Settings
            <Link to="/contacts" />
          </MenuItem>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}

export default Menubar;
