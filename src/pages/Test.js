import { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
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
const StyledLink = styled(Link)`
  text-decoration: none;
  /* 다른 스타일 속성을 추가할 수 있습니다. */
`;


// ...

const Test=()=>{
const [a,seta]=useState(0);
const c=(e)=>{
    seta(a+e);
}
const d=(e)=>{
    seta(a-e);
}
const AD=styled.div`
p{
    text-decoration-line: none;
}

`;
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
<AD>
<Link to="/Community"  > <p>커뮤니티 게시판</p>
      </Link> </AD>
      

<StyledLink to="/home">홈으로 가기</StyledLink>
 </>
)

}
export default Test;