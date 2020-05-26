import React, { Component } from 'react';
import { Link, NavLink,Redirect } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/tms.svg';
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../views/Profile/actions/index";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'
// import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};


const defaultProps = {};
const DefaultHeader=(props)=>{
  const user = useSelector((state) => state.loggedUser);
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

   console.log("@@@@@@@@user@@@@@@@@@",user);
 
  // let role = user.user ? user.user.role : null;
  let role = localStorage.getItem("role");
  const { children, ...attributes } = props;
  console.log("what is the props coming here",props);
 
  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand
        full={{ src: logo, width: 100, height: "45px", alt: 'TMS Logo' }}
        // minimized={{ src: logo, width: 30, height: 30, alt: 'TMS Logo' }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />

      <Nav className="d-md-down-none" navbar>
        {/* <NavItem className="px-3">
        {role=="ZH" || role=="SA"?<NavLink style={{color:"cornsilk"}} to="/dashboard" className="nav-link" >Dashboard</NavLink>:null}
        </NavItem> */}
        <NavItem className="px-3">
          {role=="ZH" || role=="SA"?<Link style={{color:"cornsilk"}} to="/userList" className="nav-link">Users</Link>:null}
        </NavItem>
        <NavItem className="px-3">
        <NavLink style={{color:"cornsilk"}} to="/tasklist" className="nav-link">Tasks</NavLink>
         
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        {/* <NavItem className="d-md-down-none">
          <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
        </NavItem>
        <NavItem className="d-md-down-none">
          <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
        </NavItem>
        <NavItem className="d-md-down-none">
          <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
        </NavItem> */}
        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img src={'../../assets/img/avatars/user.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
            {/* <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem> */}
            <DropdownItem><i className="fa fa-user"></i>{firstName}&nbsp;{lastName}</DropdownItem>
            {/* <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem> */}
            {/* <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem> */}
            {/* <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem> */}
            <DropdownItem onClick={e=>props.ReditectToProfile(e)}><i className="fa fa-user"></i> Profile</DropdownItem>
            <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
            {/* <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem> */}
            {/* <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem> */}
            <DropdownItem divider />
            {/* <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem> */}
            <DropdownItem onClick={e => props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      {/* <AppAsideToggler className="d-md-down-none" /> */}
      {/*<AppAsideToggler className="d-lg-none" mobile />*/}
    </React.Fragment>
  );
}
DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
