import React from 'react';
import PagePowerBtn from '../page-power-btn/index';

console.log('Music componentd loaded');

const Music = () => {
    return (<>

        <div className="horizontal-flex">
            <div className="page-layout page-title">Audio manegement page</div>
            <PagePowerBtn />
        </div>

    </>);

}
export default Music



