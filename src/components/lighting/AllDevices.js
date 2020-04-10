import React from 'react';
import Switch1 from '../devices/iSwitch/index';
import Switch4 from '../devices/iSwitch-4/index';
import '../../scss/all-devices.css';

console.log('All Devices component loaded');

const AllDevices = () => {
    return (<>
      <div className="page-layout">
            <div className="all-devices">
              <Switch1 />
              <Switch4 />
              {/* <Ireg /> */}
            </div>
      </div>
    </>);
}
export default AllDevices;