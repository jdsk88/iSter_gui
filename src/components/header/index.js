import React from 'react';
import { NavLink } from 'react-router-dom';
import DigitalClock from '../digital-clock/index'

console.log('header componentd loaded');

const Header = () => {
    return (<>

<div className="notification-bar">
<div className="notification-bar-item weather-small">
<i className="fa fa-cloud"></i>
<div>13c</div>
</div>
<DigitalClock />
<div className="notification-bar-item">1</div>
</div>
<nav className="navbar-top">

</nav>

    </>);

}
export default Header