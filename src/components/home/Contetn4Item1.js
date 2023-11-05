import { useState } from "react";
import styled, { css } from "styled-components";

const Contetn4Item1Css=styled.div`
font-size: 1.5em;
width: 100%;
/* border: 2px solid black; */
background-image: url(${props => props.image});
height:700px;
background-size:100% 100%;
background-repeat: no-repeat;

.item1{
    display: flex;
  color: white;
  

 div{
    width: 25%;
    height: 700px;
    background-color:rgba(0,0,0,0.5);
  border: 1px solid white;
  display: flex;
justify-content  :start ;
align-items: end;

 }
 div:hover{
    background-color:rgba(0,0,0,0);
 }
 h1{

   margin-left: 30px;
   margin-bottom: 30px;
 }
}
`;



const Contetn4Item1=()=>{
 const [Img1,setImg]=useState("https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-and-sunrise-in-seoul-korea_335224-501.jpg");
const Imgurl1 ="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDJfMzkg%2FMDAxNDk2Mzc5ODIyMTAx.3N9XBdWXam9I6X4Niz6Ol4ZJLXlxbG3xxKNklig59hwg.XQ-szHIC6rsUKJVOa6qLIlR6W2Lu8YMEXFAvp7tcIzgg.PNG.labanalog%2F%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25B9%25D9%25B4%25D9.png&type=sc960_832";
const Imgurl2 ="https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-and-sunrise-in-seoul-korea_335224-501.jpg";
const Imgurl3 ="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA2MDJfMzkg%2FMDAxNDk2Mzc5ODIyMTAx.3N9XBdWXam9I6X4Niz6Ol4ZJLXlxbG3xxKNklig59hwg.XQ-szHIC6rsUKJVOa6qLIlR6W2Lu8YMEXFAvp7tcIzgg.PNG.labanalog%2F%25BE%25C6%25C0%25CC%25C6%25F9%25B9%25E8%25B0%25E6%25C8%25AD%25B8%25E9%25B9%25D9%25B4%25D9.png&type=sc960_832";
const Imgurl4 ="https://img.freepik.com/free-photo/bukhansan-mountains-is-covered-by-morning-fog-and-sunrise-in-seoul-korea_335224-501.jpg";
 


return(
    <>
    <Contetn4Item1Css image={Img1}>
        <div className="item1">
           
         
           <div  onMouseOver={()=>{setImg(Imgurl1)}}><h1>봄 추천</h1></div>
           <div  onMouseOver={()=>{setImg(Imgurl2)}}><h1>여름 추천</h1></div>
           <div onMouseOver={()=>{setImg(Imgurl3)}}><h1>가을 추천</h1></div>
           <div  onMouseOver={()=>{setImg(Imgurl4)}}><h1>겨울 추천</h1></div>

        </div>
    

    </Contetn4Item1Css>
   
    </>
)

}
export default Contetn4Item1;