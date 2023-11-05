import { useState } from "react";
import styled, { css } from "styled-components";

const Contetn2Item1Css=styled.div`
font-size: 1.5em;
margin-left: 50px;
div{
    float: left ;
    border-bottom: 2px solid black;
   
    height: 50px;
    margin: 15px ;
    padding: 10px;
}
.metn2 ,.metn3,.metn4 { 
 li{
    display: none;
  
 }
}
 ul:hover > li {
    display: block;
    margin-top: 25px;
}
`;



const Contetn2Item1=()=>{
    const [a , setA]  =useState('국내');
   const [b , setB]  =useState('제주도');
   const [c , setC]  =useState('DIY여행일지');
return(
    <>
    <Contetn2Item1Css>
        <div className="metn1">
            나는
        </div>
        <div className="metn2">
         
            <ul>   {a}
                <li>           <p onMouseDown={()=>{setA("국내");setB("제주도")}}>국내</p></li>
                <li>              <p onMouseDown={()=>{setA("해외");setB("여행지")}}>해외</p></li>
            </ul>
 
         
        </div>
            <div className="metn3">
              {a=="국내" ?    <ul>   {b}
                <li>           <p onMouseDown={()=>{setB("제주도")}}>제주도</p></li>
                <li>              <p onMouseDown={()=>{setB("서울")}}>서울</p></li>
            </ul> :   <ul>   {b}
                <li>           <p onMouseDown={()=>{setB("도쿄")}}>도쿄</p></li>
                <li>              <p onMouseDown={()=>{setB("하와이")}}>하와이</p></li>
            </ul>
         
}
            </div>
            <div className="metn4">           
            <ul>
            {c}
   
            <li>           <p onMouseDown={()=>{setC("DIY여행일지")}}>DIY여행일지</p></li>
                <li>              <p onMouseDown={()=>{setC("추천코스")}}>추천코스</p></li>

                </ul>
            </div>
            <div className="metn5">
            보고싶어
            </div>

    </Contetn2Item1Css>
   
    </>
)

}
export default Contetn2Item1;