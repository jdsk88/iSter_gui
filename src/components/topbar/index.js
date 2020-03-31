import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../scss/topbar.css'

console.log('Footer componentd loaded');

const Topbar = () => {
    return (<>
        <nav className="topbar">
            <NavLink to='/add_device' className="topbar-item">
                <i className="fas fa-plus"></i>
                <label className="topbar-item-label">add device</label>
            </NavLink>
            <NavLink to='/all_devices' className="topbar-item">
                <i className="fas fa-lightbulb"></i>
                <label className="topbar-item-label">All Lights</label>
            </NavLink>
            <NavLink to='/lighting_settings' className="topbar-item">
                <i className="fas fa-cog"></i>
                <label className="topbar-item-label">settings</label>
            </NavLink>
        </nav>
    </>);
}
export default Topbar