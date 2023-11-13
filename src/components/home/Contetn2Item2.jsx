import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import img1 from "../../images/12.png"

const Contetn2Item2Css=styled.div`
display: flex;
`;
const Slide=styled.div`

 width: 95%;

 height: 280px;
 display: flex;
 justify-content: start;
flex-direction: row;
overflow: hidden;

`;

const LegtBtn=styled.div`
width: 50px;
height: 300px;

img{
  margin-top: 120px;
    width: 50px;
    height: 50px;
    transform: rotate(180deg);
}


`;
const RightBtn=styled.div`
width: 50px;
height: 300px;
img{  margin-top: 120px;
    width: 50px;
    height: 50px;   
}
`;
const Content1=styled.div`
width: 100%;
margin:30px;
height: auto;
border-radius: 15px;
  display: block;

 transform: translatex(${props=>props.move}%);

.item1{ 
    width:100%;
    height: 180px;
 
    img{
        border: 1px solid black;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        height: 100%;
        width:250px;
          display: block;
    }
    
}
.item2 {
  border: 1px solid black;
  padding: 10px;
    border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
    width:250px;
  height: 60px;

 p{
    margin-top: 10px;  
  
 }
  
}
`;


const Contetn2Item2=()=>{
    const [slideCk,setSlideCk]  = useState(0);
const chslide=(e)=>{
    setSlideCk(slideCk+e);
}
const chslide2=(e)=>{

    setSlideCk(slideCk-e);
}
useEffect(()=>{},[]);
const slides = [
    { url:"https://mblogthumb-phinf.pstatic.net/MjAyMjAzMjRfNTcg/MDAxNjQ4MDg1MTgxMDM3.bAq_2YbMdcgm2LXEradc4LdjcNL90ltQqlZWTJ9GvFwg.9Ve6rojkneVGoBTCpRskuXs9e6vQeEKjtnSXA4wYKPIg.JPEG.travelgeo/IMG_3753.jpg?type=w800", target: "#", title: "서울에 대해"},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2sbIdSpBZ39Ho9ZQHGZBB-9NT5vArXJu-A&usqp=CAU", target: "#" , title:"경복궁(景福宮, 영어: Gyeongbokgung Palace)은 서울특별시 종로구 사직로에 위치한 조선 왕조의 법궁(法宮, 정궁)이다. 1395년 창건되어 1592년 임진왜란으로 전소되었고, 1868년 흥선대원군의 주도로 중건되었다."},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGE-JNt8iF6vkqcJVrDTmvlm34OO5g7TMtA&usqp=CAU", target: "#", title:"22222222222222222" },
    { url:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/8EAUTOLyees0927ctrPSCXkUn0U.jpg", target: "#" , title:"33333333333333"},
    { url:"https://res.cloudinary.com/kyte/image/upload/w_1080,h_1560,q_auto,f_auto,e_sharpen:50,c_fill,g_auto/v1636348646/content/shutterstock/FI/rovaniemi_3", target: "#" , title:"4444444455555555555555555555555555555444"},

];

return(
   
    <>  
    <Contetn2Item2Css >
        {slideCk !==0?    <LegtBtn onClick={()=>{chslide(1.1)}}><img src={img1}></img></LegtBtn>: <></>  }
  
    <Slide>
    {slides.map((slide, index) => (
        <Content1 move={slideCk*348}>
      <div key={index}>
        <Link to={slide.target}>
        <div className="item1"> <img src={slide.url} alt={slide.title} /></div> 
        <div className="item2">   <p>{slide.title}</p></div> 
        </Link>
      </div>
    
      </Content1>
  
    ))}
</Slide>
{slideCk <-1?  <></> :  <RightBtn onClick={()=>{chslide2(1.1)}}><img src={img1}></img></RightBtn> }

    </Contetn2Item2Css> 
  
    </>
)

}
export default Contetn2Item2;