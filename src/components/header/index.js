import React from 'react';
import { NavLink } from 'react-router-dom';
import DigitalClock from '../digital-clock/index'

console.log('header componentd loaded');

const Header = () => {
    return (<>

<div className="notification-bar">
<div>1</div>
<div>1</div>
<DigitalClock />
<div>1</div>
<div>1</div>
</div>
<nav className="navbar-top">

</nav>

    </>);

}
export default Header