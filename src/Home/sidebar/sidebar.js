import React, { useState } from 'react';
import { Link } from "react-router-dom";

const SidebarWithList = () => {
  const options = {
    side: "left",
    effect: "slide-out",
    speed: 250,
    timing: 'ease-in-out'
  }
  return (
    
      
      <div className="collapse navbar-collapse navbar-ex1-collapse">
        <ul className="nav navbar-nav side-nav" style={{
          "backgroundColor": "blanchedalmond",
          "margin-top": "-17px",
          "margin-left": "-14px"
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