import React from 'react';
import PagePowerBtn from '../page-power-btn/index';
import styled, { css } from 'styled-components';

const Button = styled.button`
width:max-content;
height:75px;
background: blue;
color: red;
font-size:2rem;
${props => props.primary && css`
background: palevioletred;
color: white;
`}

`

const routes = ["a","b","c","d","e","f","g"];
const route = [
{name:"name1",type:"type",style:"primary",route:"1"},
{name:"name2",type:"type",style:"primary",route:"2"},
{name:"name3",type:"type",style:"",route:"3"},
{name:"name4",type:"type",style:"primary",route:"4"},
{name:"name5",type:"type",style:"",route:"5"},
{name:"name6",type:"type",style:"primary",route:"6"},
];

console.log('Climate componentd loaded');



const Climate = () => {
    return (<>


        <div className="horizontal-flex">
            <div className="page-layout page-title">Climate Control</div>
            <PagePowerBtn />
        </div>
        
       {route.map((item)=>(<Button key={item.name} {...item.style} Link={item.route} onClick={()=>console.log(item.name)} >{item.name}</Button>))}

    </>);

}
export default Climate

