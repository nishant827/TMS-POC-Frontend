import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../../Home/sidebar/sidebar.css';
const SidebarWithList = () => {
 
  console.log("sidebar is calling");
  return (
    
      
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav" style={{
          "backgroundColor": "blanchedalmond",
          "marginTop": "-17px",
          "marginLeft": "-14px"
        }}>

          <li>
            {/* <a href="/"><i className="fa fa-fw fa-user-plus"></i> Technision</a> */}
            <Link className="nav-link" to="/technision">
            Technision
            </Link>
          </li>
          <li>
            <a href="/"><i className="fa fa-fw fa-paper-plane-o"></i>Tasks</a>
          </li>
          <li>
            <a href="/"><i className="fa fa-fw fa fa-question-circle"></i>Sites</a>
          </li>
        </ul>
      </div>
   
  );

}
export default SidebarWithList;