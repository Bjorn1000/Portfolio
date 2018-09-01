import React from 'react';
import img from './Logo.png';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">Osbjorn Gulbranson</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
              <li>
                <a href="/apps">Projects</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;
