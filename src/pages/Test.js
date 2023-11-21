import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Test2 from "./Teset2"
import Test3 from "./Teset3"
import Test4 from "./Teset4"
const Body =styled.div`
width: 1200px;
height: 3000px;
margin: 0 auto;
`;
const A =styled.div`
width: 100%;
height: 500px;
margin-top: 100px;

`;

const A1 =styled.div`
margin: 0 auto;
height:90%;
width: 90%;
background-position-y:postion/2 ;
background: url("https://img.freepik.com/free-photo/dairy-star-trek-in-the-winter-woods-dramatic-and-picturesque-scene-in-anticipation-of-the-holiday-carpathian-ukraine_146671-14706.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699920000&semt=sph") fixed;
background-size:100% 60%;
background-repeat: no-repeat;
position: relative;

p{
  font-family:sans-serif;
  color: white;
  width:50px;
  font-size: 4em;
  position: absolute;
  top: 100px;
  left: 150px;
  ${({ bb })=>
    bb == 0
      ? css`
          animation: slide 3s;
        `
      : css`
          animation: slide2 3s;
        `};
}
@keyframes slide {
  0% {
    opacity: 0;
     left: -100px;
  } 
  100% { opacity: 1;
    left: 150px;
  }
}
@keyframes slide2 {
  0% {
    opacity: 1;
    left: 150px;
  } 
  100% { 
    opacity: 0;
     left: -100px;
  }
}
`;



const Photo1 =styled.div`
height:450px;
width:450px;
background: url("https://image.istarbucks.co.kr/upload/common/img/main/2023/christmas_img.png");
background-size: 450px;
background-repeat: no-repeat;
position: absolute;
top: 80px;
right: 100px;
transform: translateX(${props => props.asdw}px);
`;


function Test() {
 const [position,setPosition ] =useState(0);
 const [asd,setasd ] =useState(20);
 const  onScroll=()=> {

setPosition(window.scrollY); 
}
useEffect(()=>{

console.log("마운트")
window.addEventListener("scroll",onScroll);
return ()=>{  console.log("언마운트")
  window.removeEventListener("scroll",onScroll);
}

},[])
  return (
<Body>
  <A><A1 bb={position}><Photo1 asdw={-position}/><p>PICK YOUR FAVORITE</p></A1></A>
      {asd}
      <button onClick={()=>{setasd(asd+100)}}>1</button>
      {position}
  <Test2></Test2>
  <Test3></Test3>
  <Test4/>
</Body>
  );
}

export default Test;
