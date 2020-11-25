import React from "react";
import { Header, Menu } from "semantic-ui-react";
import { NavLink } from 'react-router-dom'

function NavBar(props) {
  let { changeView, logOutUser } = props;
  return (
    <div>
      <div className="navbar-header">
        <Header as="h1">Adventurer's Arena</Header>
      </div>
      <div className="navbar-menu">
        <Menu>
          <Menu.Item id="home" onClick={(e) => changeView(e.target.id)}>
            Home
          </Menu.Item>
          <Menu.Item
            id="manage encounters"
            onClick={(e) => changeView(e.target.id)}
          >
            Manage Encounters
          </Menu.Item>
          <Menu.Item id="log out">
            <NavLink to='/' onClick={() => logOutUser()}>
              Log out
            </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;
