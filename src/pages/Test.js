import { useState } from "react";
import styled, { css } from "styled-components";
const A=styled.div`
width: 1000px;
height: 600px;
background-color: black;
display: flex;

overflow: hidden;

`;
const B=styled.div`
display: flex;
flex-direction:column;
flex-wrap: wrap;
width: 500px;

height: 600px;
background-color: red;
transform: translate(${props=>props.zxc}px);
.C{
    width: 200px;
height: 100px;
background-color: blue; 
}
`;

const Test=()=>{
const [a,seta]=useState(0);
const c=(e)=>{
    seta(a+e);
}
const d=(e)=>{
    seta(a-e);
}
return(
<> 
<button onClick={()=>{c(500)}}>후</button>
<button onClick={()=>{d(500)}}>전</button>
<A>
<B zxc={a}>
<B>1</B>
<B>2</B>
<B>3</B>
</B>
</A>

    </>
)

}
export default Test;