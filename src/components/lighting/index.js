import React from 'react';

import Topbar from '../topbar/index'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../scss/lighting.css'
import AddDevice from './AddDevice'
import Settings from '../lighting/Settings'
import AllDevices from '../lighting/AllDevices';
// import Ireg from '../devices/iReg/index'

console.log('Lighting componentd loaded');

const Lighting = () => {
    return (<>
        <div className="page-layout lighting">
            <Router>
                {/* <h3>Lighting setup page</h3> */}
                <Topbar />
                <Switch>
                    <Route exactly path='/add_device' component={AddDevice} />
                    <Route exactly path='/all_devices' component={AllDevices} />
                    <Route exactly path='/lighting_settings' component={Settings} />
                </Switch>
            </Router>
        </div>



    </>);

}
export default Lighting