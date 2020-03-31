import React from 'react';
import { NavLink } from 'react-router-dom';

console.log('Footer componentd loaded');

const Footer = () => {
    return (<>
        <nav className="navbar-bottom">
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
            {/* <NavLink to='/music' className="navbar-item">
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
            </NavLink> */}
        </nav>
    </>);
}
export default Footer