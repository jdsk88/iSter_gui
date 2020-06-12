import React, { Component } from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import { NavLink } from 'react-router-dom';


const Footer = () => {{
    
        const navbarItems = [{
            label: "Item 1",
            target: "item-1"
        }, {
            label: "Item 2",
            target: "item-2"
        }, {
            label: "Item 3",
            target: "item-3"
        }, {
            label: "Item 4",
            target: "item-4"
        }, {
            label: "Item 5",
            target: "item-5"
        }, {
            label: "Item 6",
            target: "item-6"
        },]
        
        return (
            <div>
                <NavBar items={navbarItems} offset={-80} duration={500} delay={0}>
                </NavBar>
                <div className="container">
                    <ElementsWrapper items={navbarItems}>
                            <nav className="navbar-bottom-fucking-overflow">
                                <NavLink name="item-1" to='/music' className="navbar-item">
                                    <i className="fas fa-music"></i>
                                    <label className="navbar-item-label">Music</label>
                                </NavLink>
                                <NavLink name="item-2" to='/video' className="navbar-item">
                                    <i className="fas fa-tv"></i>
                                    <label className="navbar-item-label">Videos</label>
                                </NavLink>
                                <NavLink name="item-3" to='/lighting' className="navbar-item">
                                    <i className="fas fa-lightbulb"></i>
                                    <label className="navbar-item-label">Lighting</label>
                                </NavLink>
                                <NavLink name="item-4" to='/music' className="navbar-item">
                                    <i className="fas fa-music"></i>
                                    <label className="navbar-item-label">Music</label>
                                </NavLink>
                                <NavLink name="item-5" to='/video' className="navbar-item">
                                    <i className="fas fa-tv"></i>
                                    <label className="navbar-item-label">Videos</label>
                                </NavLink>
                                <NavLink name="item-6" to='/lighting' className="navbar-item">
                                    <i className="fas fa-lightbulb"></i>
                                    <label className="navbar-item-label">Lighting</label>
                                </NavLink>
                            </nav>
                    </ElementsWrapper>
                </div>
            </div>
        );
    }
}

export default Footer;


// import React from 'react';
// import { NavLink } from 'react-router-dom';

// console.log('Footer componentd loaded');

// const Footer = () => {
//     return (<>
        // <div className="navbar-parent">
        //     <nav className="navbar-bottom-fucking-overflow">
        //                 <NavLink to='/music' className="navbar-item">
        //                     <i className="fas fa-music"></i>
        //                     <label className="navbar-item-label">Music</label>
        //                 </NavLink>
        //                 <NavLink to='/video' className="navbar-item">
        //                     <i className="fas fa-tv"></i>
        //                     <label className="navbar-item-label">Videos</label>
        //                 </NavLink>
        //                 <NavLink to='/lighting' className="navbar-item">
        //                     <i className="fas fa-lightbulb"></i>
        //                     <label className="navbar-item-label">Lighting</label>
        //                 </NavLink>
        //                 <NavLink to='/music' className="navbar-item">
        //                     <i className="fas fa-music"></i>
        //                     <label className="navbar-item-label">Music</label>
        //                 </NavLink>
        //                 <NavLink to='/video' className="navbar-item">
        //                     <i className="fas fa-tv"></i>
        //                     <label className="navbar-item-label">Videos</label>
        //                 </NavLink>
        //                 <NavLink to='/lighting' className="navbar-item">
        //                     <i className="fas fa-lightbulb"></i>
        //                     <label className="navbar-item-label">Lighting</label>
        //                 </NavLink>
        //     </nav>
        // </div>
//          <nav className="sidebar">
//              <div className="sidebar-title">Rooms</div>
//             <NavLink to='/all_devices' className="sidebar-item">
//                 <i className="fas fa-door-open"></i>
//                 <div className="sidebar-item-label-container">
//                 <label className="sidebar-item-label">All Lights</label>
//                 <label className="sidebar-item-label">All Lights</label>
//                 </div>
//             </NavLink>
//             <NavLink to='/lighting_settings' className="sidebar-item">
//                 <i className="fas fa-door-open"></i>
//                 <div className="sidebar-item-label-container">
//                     <label className="sidebar-item-label">settings</label>
//                     <label className="sidebar-item-label">settings</label>
//                 </div>
//             </NavLink>
//         </nav>
//     </>);
// }
// export default Footer