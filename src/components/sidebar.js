import React from "react";
import { Link } from "react-router-dom";
import { logOut } from '../service/firebase';
import SidebarItems from './sidebarItems';

import '../styles/sidebar.css';

import logo from "../icons/logoDash.png";

function Sidebar() {

  return (
    <aside className="sidenav">
      <div style={{padding: '20px', display: 'flex'}}>
        <img src={logo} alt="leaf" style={{width: '35px', height: '35px'}}/>
        <h4 style={{marginTop: '3px', marginLeft: '5px', color: 'white', fontWeight: '600'}}>AgriGrowth</h4>
      </div>
      <ul className="sidenav__list">
      {
        SidebarItems.map((item, index)=> {
            return (
              <li key={index} className="sidenav__list-item">
                <Link to={item.route}>
                  {/* {item.icon} */}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
        })
      }
      <div className="button-position">
        <	button className="button-1" href="/login" onClick={logOut}>Logout</button>
      </div>
      </ul>
    </aside>
  )
}

export default Sidebar;
