import React from 'react';
import Switch1 from '../devices/iSwitch/index'
import Switch4 from '../devices/iSwitch-4/index'

console.log('All Devices component loaded');

const AllDevices = () => {
    return (<>
        <Switch1 />
        <Switch4 />
        {/* <Ireg /> */}
    </>);
}
export default AllDevices