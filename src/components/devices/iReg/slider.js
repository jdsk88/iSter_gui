import React, { Component, useState } from "react";
import Slider from "react-rangeslider";
import api_url from '../../../config';
import axios from 'axios';

const SliderVertical = props => {
  // console.log("props", props);
  const [value, setValue] = useState(props.value);
  console.log('props123',props);

  const handleChange = value => {
    setValue(value);
    // axios
    // .post(api_url + `/devices/request-udp`, {
    //   value: value,
    //   port: props.light.port,
    //   host: props.light.host
    // });
  }
  
  

  const handleChangeComplete = () => {

    console.log('props',props);
    // axios
    // .post(api_url + `/lights/update`, {
    //   id: props.light._id,
    //   value: value,
    //   label: props.light.label,
    //   port: props.light.port,
    //   host: props.light.host
    // });
  };



  return (
    <div className="light__slider-vertical">
      <div className="light__slider-label">{props.light.label}</div>
      <div className="slider-vertical">
        <Slider
          min={0}
          max={100}
          value={value}
          orientation="horizontal"
          onChange={handleChange}
          onChangeComplete={handleChangeComplete}
          labels={false}
        />
      </div>
      <div className="light__slider-value">{value}</div>
    </div>
  );
};

export default SliderVertical;

// class Volume extends Component {
//   constructor (props, context) {
//     super(props, context)
//     this.state = {
//       value: 25,
//       reverseValue: 8
//     }
//   }

//   handleChange = (value) => {
//     this.setState({
//       value: value
//     })
//   }

// //   handleChangeReverse = (value) => {
// //     this.setState({
// //       reverseValue: value
// //     })
// //   }

//   render () {
//     const { value, reverseValue } = this.state
//     return (

//       <div className='slider orientation-reversed'>
//         <div className='slider-group'>

//           <div className='slider-vertical'>
//             <Slider
//               min={0}
//               max={100}
//               value={value}
//               orientation='vertical'
//               onChange={this.handleChange}
//             />
//             <div className='value'>{value}</div>
//           </div>

// {/*
//           <div className='slider-horizontal'>
//             <Slider
//               min={0}
//               max={100}
//               value={reverseValue}
//               orientation='horizontal'
//               onChange={this.handleChangeReverse}
//             />
//             <div className='value'>{reverseValue}</div>
//           </div> */}

//         </div>
//       </div>
//     )
//   }
// }
