import React from 'react';

import Topbar from '../topbar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../scss/lighting.css'
import AddDevice from './AddDevice'
import Settings from '../lighting/Settings'
import AllDevices from '../lighting/AllDevices';
import Sidebar from '../sidebar/index';
import PagePowerBtn from '../page-power-btn/index';
// import Ireg from '../devices/iReg/index'

console.log('Lighting componentd loaded');

const Lighting = () => {
    return (<>



    <div className="horizontal-flex">
        <div className="page-layout page-title">Lighting manegement page</div>
        <PagePowerBtn />
    </div>
                {/* <Router> 
                    <Topbar />
                    <h3>Lighting setup page</h3>
                    <Switch>
                        <Route exactly path='/add_device' component={AddDevice} />
                        <Route exactly path='/all_devices' component={AllDevices} />
                        <Route exactly path='/lighting_settings' component={Settings} />
                    </Switch>
                </Router> */}
    </>);

}
export default Lighting