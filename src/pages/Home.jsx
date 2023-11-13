import NavBox from "./Header"
import Img11 from "../images/img1.jpg";
import Contetn2Item1 from "../components/home/Contetn2Item1"
import Contetn2Item2 from "../components/home/Contetn2Item2"
import Contetn3Item1 from "../components/home/Contetn3Item1"
import Contetn4Item1 from "../components/home/Contetn4Item1"
import Contetn5Item1 from "../components/home/Contetn5Item1"
import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Header from "./Header";
const HomeCss=styled.div`

`;


const Content1=styled.div`
 position: relative;
 height: 100vh;
.Content1Nav{  
    position: relative;
    color:white;
    left: -50;
    z-index: 2;
    top:0;
} 
 .Content1mentimg{
    position: absolute;
  

    z-index: 1;
    img{width: 100vw;
      height: 100vh;
      min-width: 600px;
      position: relative;
  
    }

 }

.Content1ment{
    h1{
        position: absolute;
    left: 50px;
    bottom: 100px;

  color: #ffffff;
  font-size: 60px;
  z-index: 3;
    }

}
    `;
const Content2=styled.div`
       
        max-width: 1200px;
        min-width: 600px;
 margin: 0px auto;
       display: flex;
       flex-direction:column;

       margin-top: 100px;
    .Content2item1Css{
       
        width: 60%;
        position: relative;
        margin: 0 auto;
    }
    .Content2item2Css{
     width:80%;
     margin: 0 auto;
  
 }
`;
const Content3=styled.div`
         margin-top: 100px;
        min-width: 600px;
        height: auto;

     
.Content3item1Css{

    width: 100%;
 
}
`;
const Content4=styled.div`
 
        min-width: 600px;
        height: 100%;
 margin: 50px auto;
 
`;
const Content5=styled.div`
    max-width: 1200px;
        min-width: 600px;
        height: auto;
 margin: 100px auto;
`;
const Home=() =>{


    return(
        <HomeCss>
 <Content1>
 <div className="Content1mentimg">
         <img src={Img11}></img>
    </div>
    <div className="Content1Nav">
    <Header white={true}/>
 </div> 
  
 <div className="Content1ment">
  <h1>너와 나의 <br/>여행 이야기</h1>
    </div> 

 </Content1>
  

   <Content3>

<div className="Content3item1Css">
   <Contetn3Item1></Contetn3Item1>

    </div>
 

   </Content3>
   <Content2>
    <div className="Content2item1Css">
   <Contetn2Item1></Contetn2Item1>
    </div>
 
    <div className="Content2item2Css">
    <Contetn2Item2></Contetn2Item2>
</div>
   </Content2>
   <Content4>
   <div className="Contetn4Item1">
    </div>       
    <Contetn4Item1></Contetn4Item1>
   </Content4>
   <Content5>
   <Contetn5Item1></Contetn5Item1>

   </Content5>


  </HomeCss>
    
    );
};

export default Home;