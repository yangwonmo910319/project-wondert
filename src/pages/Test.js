import { useState } from "react";
import styled, { css } from "styled-components";

const TestCss = styled.div`
  width:100px;
height: 300px;
background-color:${pro=>pro.col};
div{
  width:100px;
height: 100px;
background-color:rgba(0,0,0,0.5);
}
div:hover{
  background:rgba(0,0,0,0);
}

`;
const Box = styled.div`
margin: 0 auto;
max-width:1200px;
height: 300px;
border:  2px solid black;
display: flex;
flex-wrap: nowrap;
div{
  width: 500px;
  height: 250px;
  background-color: blue;
color: white;
}


`;


const Test = () => {
const [b,setB]=useState("green");
const C=()=>{
 
}

  return (
    <>
      <TestCss col={b}>
    <div className="A1" onMouseOver={()=>{setB("pink")}}></div>
    <div className="A2" onMouseOver={()=>{setB("blue")}}></div>
    <div className="A3"onMouseOut={()=>{setB("skyblue")}}></div>
  
  
      </TestCss>
      <Box>
<div>1</div>
<div>2</div>
<div>3</div>
<div>4</div>
<div>5</div>
<div>6</div>

      </Box>

    </>
  );
};
export default Test;