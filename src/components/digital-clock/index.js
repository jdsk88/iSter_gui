import React from "react";
import date from "date-and-time";
// import '../../scss/digital-clock.css';
import '../../scss/digital-clock-clear.css';

const DigitalClock = () => {

    // time interval
    setInterval(function () {
          const time = date.format(new Date(), 'hh:mm A');
        // const timeH = date.format(new Date(), "HH" + " " + ":");
        // const timeM = date.format(new Date(), "mm" + " " + ":");
        // const timeS = date.format(new Date(), "ss");
        // document.getElementById("timeH").innerText = timeH;
        // document.getElementById("timeM").innerText = timeM;
        // document.getElementById("timeS").innerText = timeS;
        document.getElementById("time").innerText = time;
    }, 1000);
    return (
        <div className="clock">
            {/* <div className="title-clock" id="timeH"></div>
            <div className="title-clock" id="timeM"></div>
            <div className="title-clock" id="timeS"></div> */}
            <div className="title-clock" id="time"></div>
        </div>
    );
}

export default DigitalClock