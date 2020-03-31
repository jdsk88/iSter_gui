import React from 'react';
import api_url from '../../../config'
import axios from 'axios'
import SliderVertical from "./slider";



class Ireg extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isActive: false };
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            devices: []
        };
    }


    componentDidMount() {
        axios.get(api_url + `/devices?type=iReg`)
            .then(res => {
                const devices = res.data;
                console.log('devices mounted')
                this.setState({
                    devices
                });
            });
    }

    

    render() {
        return (<>
           
           <div className="slider orientation-reversed">
        <div className="light__slider-wrap">
        {this.state.devices.map(device => 
        <tbody key={device.id}>
        <tr>
            <td>{device.id}</td>
            <td>{device.type}</td>
            <td>{device.ip}</td>
            </tr>
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
        <SliderVertical key={light._id} light={light} /> 
            </tbody>
        )}
      </div>
      </div>

        </>);
    }
}

export default Ireg