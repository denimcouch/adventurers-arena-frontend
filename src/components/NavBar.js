import React from "react";
import { Header, Menu } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  let { changeView, logOutUser } = props;
  
  return (
    <div className='navbar'>
      <div className="navbar-header-cont">
        <h1 className='navbar-header'>The Bestiary</h1>
      </div>
      <div className="navbar-menu">
          <button className=' navbar-menu-button' id="home" onClick={(e) => changeView(e.target.id)}>
            Home
          </button>
          <button className=' navbar-menu-button'
            id="manage encounters"
            onClick={(e) => changeView(e.target.id)}
          >
            Manage Encounters
          </button >
          <button className=' navbar-menu-button' id="log out" onClick={() => logOutUser()}>
            <NavLink to='/' id="log-out" onClick={() => logOutUser()} >
              Log out
            </NavLink>
          </button >
      </div>
    </div>
  );
}

export default NavBar;
