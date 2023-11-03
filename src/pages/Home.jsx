import NavBox from "./Header"
import Img11 from "../images/img1.jpg";

import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
const HomeCss=styled.div`

background-color: black;
height: 2000px;
`;
const Content1=styled.div`
width: 100vw;
height: 1000px;
.Content1Nav{  
    color:white;
} 
   > img{
        margin-top: -100px;
        width: 100%;
        height: 1000px;
   
    }

.Content1ment{
    h1{
        margin-top:-200px;
        margin-left: 5%;
  color: white;
  font-size: 60px;
  
    }

}
    `;
const Content2=styled.div`
        max-width: 1200px;
 margin: 0 auto;
    height: 500px;
    background-color: #aabec8;
`;
const Content3=styled.div`
         max-width: 1200px;
         margin: 0 auto;
    height: 100px;
    background-color: #c25f5f;
`;
const Content4=styled.div`
        width: 100%;
    height: 100px;
    background-color: #220d0d;
`;
const Content5=styled.div`
        width: 100%;
    height: 100px;
    background-color: #ab8d8d;
`;
const Home=() =>{


    return(
        <HomeCss>
 <Content1>
    <div className="Content1Nav">
 <NavBox></NavBox>
 </div>
 <img src={Img11}/>           
 <div className="Content1ment">
  <h1>너와 나의 <br/>여행 이야기
    
  </h1>
    </div>
 </Content1>
  
   <Content2></Content2>
   <Content3></Content3>
   <Content4></Content4>
   <Content5></Content5>


  </HomeCss>
    
    );
};

export default Home;