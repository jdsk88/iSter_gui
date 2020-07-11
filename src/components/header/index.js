import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DigitalClock from '../digital-clock/index'
import Weather from '../wheater-app/index'

console.log('header componentd loaded');

const Header = () => {
    return (<>

<div className="notification-bar">
{/* <div className="notification-bar-item weather-small">
<i className="fa fa-cloud"></i>
<div></div>
</div> */}
<Weather/>
<DigitalClock />
<div className="notification-bar-item"></div>
</div>
{/* <nav className="navbar-top"> */}

{/* </nav> */}

    </>);

}
export default Header