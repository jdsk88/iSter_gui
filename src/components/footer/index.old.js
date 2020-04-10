import React from 'react';
import { NavLink } from 'react-router-dom';

console.log('Footer componentd loaded');

const Footer = () => {
    return (<>
        <div className="navbar-parent">
            <nav className="navbar-bottom-fucking-overflow">
                        <NavLink to='/music' className="navbar-item">
                            <i className="fas fa-music"></i>
                            <label className="navbar-item-label">Music</label>
                        </NavLink>
                        <NavLink to='/video' className="navbar-item">
                            <i className="fas fa-tv"></i>
                            <label className="navbar-item-label">Videos</label>
                        </NavLink>
                        <NavLink to='/lighting' className="navbar-item">
                            <i className="fas fa-lightbulb"></i>
                            <label className="navbar-item-label">Lighting</label>
                        </NavLink>
                        <NavLink to='/music' className="navbar-item">
                            <i className="fas fa-music"></i>
                            <label className="navbar-item-label">Music</label>
                        </NavLink>
                        <NavLink to='/video' className="navbar-item">
                            <i className="fas fa-tv"></i>
                            <label className="navbar-item-label">Videos</label>
                        </NavLink>
                        <NavLink to='/lighting' className="navbar-item">
                            <i className="fas fa-lightbulb"></i>
                            <label className="navbar-item-label">Lighting</label>
                        </NavLink>
            </nav>
        </div>
         <nav className="sidebar">
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
        </nav>
    </>);
}
export default Footer