import React from 'react';
import api_url from '../../../config'
import axios from 'axios'


class Switch4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isActive: false };
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            devices: []
        };
    }


    componentDidMount() {
        axios.get(api_url + `/devices?type=switch-4`)
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
        currentEl.classList.toggle('active');
        const ch1_state = currentEl.dataset.state1;
        const ch2_state = currentEl.dataset.state2;
        const ch3_state = currentEl.dataset.state3;
        const ch4_state = currentEl.dataset.state4;
        // const device_state1 = () => axios.get(api_url + `/devices/${device_id}?state=1`)
        // const device_state0 = () => axios.get(api_url + `/devices/${device_id}?state=0`)
        
        if (currentEl.classList.contains('active')) {
            axios.get(`${device_ip}/s/1/1`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                // state: ['1',`0`,`0`,`0`]
                state: ['1',`${ch2_state}`,`${ch3_state}`,`${ch4_state}`]
            });
            // console.log(ch1_state);
            // currentEl.innerText = 'On';
        } else {
            axios.get(`${device_ip}/s/1/0`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                // state: ['0',`0`,`0`,`0`]
                state: ['0',`${ch2_state}`,`${ch3_state}`,`${ch4_state}`]
            });
            // currentEl.innerText = 'Off';
        }
    }
    handleClick2(event) {
        const currentEl = event.target;
        const device_ip = currentEl.dataset.ip;
        const device_id = currentEl.dataset.id;
        const device_type = currentEl.dataset.type;
        currentEl.classList.toggle('active');
        
        if (currentEl.classList.contains('active')) {
            axios.get(`${device_ip}/s/2/1`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: ['1',`1`,`0`,`0`]

            });
            currentEl.innerText = 'On';
        } else {
            axios.get(`${device_ip}/s/2/0`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: ['1',`0`,`0`,`0`]

            });
            currentEl.innerText = 'Off';
        }
    }
    handleClick3(event) {
        const currentEl = event.target;
        const device_ip = currentEl.dataset.ip;
        const device_id = currentEl.dataset.id;
        const device_type = currentEl.dataset.type;
        currentEl.classList.toggle('active');

        if (currentEl.classList.contains('active')) {
            axios.get(`${device_ip}/s/3/1`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: ['1',`1`,`1`,`0`]

            });
            currentEl.innerText = 'On';
        } else {
            axios.get(`${device_ip}/s/3/0`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: ['1',`0`,`0`,`0`]

            });
            currentEl.innerText = 'Off';
        }
    }
    handleClick4(event) {
        const currentEl = event.target;
        const device_ip = currentEl.dataset.ip;
        const device_id = currentEl.dataset.id;
        const device_type = currentEl.dataset.type;
        currentEl.classList.toggle('active');

        if (currentEl.classList.contains('active')) {
            axios.get(`${device_ip}/s/4/1`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: [,,,`1`]

            });
            currentEl.innerText = 'On';
        } else {
            axios.get(`${device_ip}/s/4/0`);
            axios.put(api_url + `/devices/${device_id}`, {
                id: `${device_id}`,
                ip: `${device_ip}`,
                type: `${device_type}`,
                state: [,,,`0`]

            });
            currentEl.innerText = 'Off';
        }
    }

    render() {
        return (
            <div className="device-container">
                <table className="device-table">
                    {this.state.devices.map(device =>
                        <tbody key={device.id}>
                            <tr>
                                <td>{device.id}</td>
                                <td>{device.type}</td>
                                <td>{device.ip}</td>
                                <td>
                                    <label class="el-switch">
                                        <input data-ip={device.ip} data-id={device.id} data-type={device.type} data-state1={device.state[0]} className="toggleNotActive" onClick={this.handleClick} type="checkbox" name="switch" />
                                        <span class="el-switch-style"></span>
                                    </label>
                                    <label class="el-switch">
                                        <input data-ip={device.ip} data-id={device.id} data-type={device.type} data-state2={device.state[1]} className="toggleNotActive" onClick={this.handleClick2} type="checkbox" name="switch" />
                                        <span class="el-switch-style"></span>
                                    </label>
                                    <label class="el-switch">
                                        <input data-ip={device.ip} data-id={device.id} data-type={device.type} data-state3={device.state[3]} className="toggleNotActive" onClick={this.handleClick3} type="checkbox" name="switch" />
                                        <span class="el-switch-style"></span>
                                    </label>
                                    <label class="el-switch">
                                        <input data-ip={device.ip} data-id={device.id} data-type={device.type} data-state4={device.state[4]}  className="toggleNotActive" onClick={this.handleClick4} type="checkbox" name="switch" />
                                        <span class="el-switch-style"></span>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    )}
                </table>

            </div>









        );
    }
}

export default Switch4