import React from 'react';
import api_url from '../../../config'
import axios from 'axios'


class ISwtich extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isActive: false };
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            devices: []
        };
    }


    componentDidMount() {
        axios.get(api_url + `/devices?type=switch`)
            .then(res => {
                const devices = res.data;
                console.log('devices mounted')
                this.setState({
                    devices
                });
            });
    }

    handleClick(event) {
        const currentEl = event.target;
        const device_ip = currentEl.dataset.ip;
        const device_id = currentEl.dataset.id;
        const device_type = currentEl.dataset.type;
        const device_name = currentEl.dataset.name;
        currentEl.classList.toggle('active');

        if (currentEl.classList.contains('active')) {
            axios.get(`${device_ip}/led/1`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: [`1`]

            });
            currentEl.innerText = 'On';
        } else {
            axios.get(`${device_ip}/led/0`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                name: `${device_name}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: [`0`]

            });
            currentEl.innerText = 'Off';
        }
    }
    

    render() {
        return (
            <div className="device-container">
                <div className="device-table">
                    {this.state.devices.map(device =>
                        <div key={device.id}>
                            <div className="">
                                <div>{device.id}</div>
                                <div>{device.name}</div>
                                {/* <div>{device.type}</div> */}
                                {/* <div>{device.ip}</div> */}
                                <div>
                                    <label class="el-switch">
                                        <input data-ip={device.ip} data-name={device.nawsme} data-id={device.id} data-type={device.type} data-state={device.state} className="toggleNotActive" onClick={this.handleClick} type="checkbox" name="switch" />
                                        <span class="el-switch-style"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default ISwtich