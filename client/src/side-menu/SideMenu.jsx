import React from "react";
import { Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home"
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import CallIcon from "@mui/icons-material/Call";
import "./SideMenu.style.css";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
  let navigate = useNavigate();
  const handleSelect = (selected) => {
    let path = "/" + selected;
    navigate(path);
  };
  return (
    <SideNav onSelect={handleSelect}>
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="">

        <NavItem eventKey="">
          <NavIcon>
            <HomeIcon style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>

        <NavItem eventKey="bookings">
          <NavIcon>
            <CheckBoxIcon style={{ fontSize: "1.75em" }} />
          </NavIcon>

          <NavText>My Bookings</NavText>
        </NavItem>


        <NavItem eventKey="account">
          <NavIcon>
            <AccountBoxIcon style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>My Account</NavText>
        </NavItem>

        <NavItem eventKey="settings">
          <NavIcon>
            <SettingsApplicationsIcon style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Settings</NavText>
        </NavItem>
        <NavItem eventKey="contact">
          <NavIcon>
            <CallIcon style={{ fontSize: "1.75em" }} />
          </NavIcon>
          <NavText>Contact</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default SideMenu;
