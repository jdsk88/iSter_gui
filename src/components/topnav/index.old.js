import React from "react";
import { NavLink } from "react-router-dom";

console.log("TopNav componentd loaded");




const TopNav = () => {

  return (
    <>
      <div className="top-navbar-parent">
        <nav className="top-navbar-bottom-fucking-overflow">
          <button to="/left" className="top-navbar-item">
            <label className="top-navbar-item-label">Previus</label>
            <i className="fas fa-arrow-circle-left"></i>
          </button>
          {/* <div className="top-navbar-item">
          </div>
          <div className="top-navbar-item"> 
          </div>*/}
          <NavLink to="/home" className="top-navbar-item">
            <i className="fas fa-home"></i>
            <label className="top-navbar-item-label">Home</label>
          </NavLink>
          {/* <div className="top-navbar-item">
          </div>
          <div className="top-navbar-item">
          </div> */}
          <NavLink to="/right" className="top-navbar-item">
            <i className="fas fa-cog"></i>
            <label className="top-navbar-item-label">Settings</label>
          </NavLink>
        </nav>
      </div>
      {/* <nav className="sidebar">
             <div className="sidebar-title">Rooms</div>
            <NavLink to='/all_devices' className="sidebar-item">
                <i className="fas fa-door-open"></i>
                <div className="sidebar-item-label-container">
                <label className="sidebar-item-label">All Lights</label>
                <label className="sidebar-item-label">All Lights</label>
                </div>
            </NavLink>
            <NavLink to='/lighting_settings' className="sidebar-item">
                <i className="fas fa-door-open"></i>
                <div className="sidebar-item-label-container">
                    <label className="sidebar-item-label">settings</label>
                    <label className="sidebar-item-label">settings</label>
                </div>
            </NavLink>
        </nav> */}
    </>
  );
};
export default TopNav;
