import React from "react";
import { NavLink } from "react-router-dom";

console.log("bottom navigation from data base");




const Footer = () => {

  constructor(props) {
    super(props);
   state = {
        devices: []
    };
}


componentDidMount() {
    axios.get(api_url + `/esp-list/deviceType=Switch-4`)
        .then(res => {
            const devices = res.data;
            console.log('devices mounted')
            this.setState({
                devices
            });
        });
}

  return (
    <>

{this.state.devices.map(device =>
                       
      <div className="navbar-parent"> 
        <nav className="navbar-bottom-fucking-overflow">
          <NavLink to="/music" className="navbar-item"   key={device.id}>
            <i className="fas fa-music"></i>
            <label className="navbar-item-label">Audio</label>
          </NavLink>
        </nav>
      </div>
      )}
     </>
  );
};
export default Footer;
