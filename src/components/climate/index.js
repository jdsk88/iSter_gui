import React from 'react';
import PagePowerBtn from '../page-power-btn/index';

console.log('Climate componentd loaded');

const Climate = () => {
    return (<>


        <div className="horizontal-flex">
            <div className="page-layout page-title">Climate Control</div>
            <PagePowerBtn />
        </div>


    </>);

}
export default Climate

