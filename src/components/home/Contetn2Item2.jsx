import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../images/12.png"

const Contetn2Item2Css=styled.div`
width: 100%;
height: 280px;
display: flex;
`;
const Slide=styled.div`


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
height: 280px;

img{  margin-top: 120px;
    width: 50px;
    height: 50px;   
}
`;
const Content1=styled.div`
background:none;

margin:34px;
 height: 280px;
border-radius: 10px;
  display: block;

 transform: translatex(${props=>props.move}%);

.item1{ 
    width:100%;
    height: 180px;
 
    img{
        border: 1px solid black;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 170px;
        width:300px;
          display: block;
    }
    
}
.item2 {
  border: 1px solid black;
  padding: 10px;
    border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
      overflow: hidden;
    width:300px;
  height: 60px;
  margin-top: -10px;  

 p{
    margin-top: 10px;  
    overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
 }
  
}
`;
const Left=styled.div`
    width:50px;
    height: auto;
  
`;
const Right=styled.div`
    width:50px;
    height: auto;

`;

const Contetn2Item2=()=>{
    const navigate = useNavigate();
    const [slideCk,setSlideCk]  = useState(0);
const chslide=(e)=>{
    setSlideCk(slideCk+e);
}
const chslide2=(e)=>{

    setSlideCk(slideCk-e);
}
const AS = styled.div`
    background: white;
    border: white;
`;
useEffect(()=>{},[]);
const slides = [
    { url:"https://mblogthumb-phinf.pstatic.net/MjAyMjAzMjRfNTcg/MDAxNjQ4MDg1MTgxMDM3.bAq_2YbMdcgm2LXEradc4LdjcNL90ltQqlZWTJ9GvFwg.9Ve6rojkneVGoBTCpRskuXs9e6vQeEKjtnSXA4wYKPIg.JPEG.travelgeo/IMG_3753.jpg?type=w800", target: "DiyPage/Diyview", title:"특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스"},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2sbIdSpBZ39Ho9ZQHGZBB-9NT5vArXJu-A&usqp=CAU", target: "DiyPage/Diyview" , title:"경복궁(景福宮, 영어: Gyeongbokgung Palace)은 서울특별시 종로구 사직로에 위치한 조선 왕조의 법궁(法宮, 정궁)이다. 1395년 창건되어 1592년 임진왜란으로 전소되었고, 1868년 흥선대원군의 주도로 중건되었다."},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeGE-JNt8iF6vkqcJVrDTmvlm34OO5g7TMtA&usqp=CAU", target: "DiyPage/Diyview", title:"22222222222222222" },
    { url:"https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/STq/image/8EAUTOLyees0927ctrPSCXkUn0U.jpg", target: "DiyPage/Diyview" , title:"33333333333333"},
    { url:"https://res.cloudinary.com/kyte/image/upload/w_1080,h_1560,q_auto,f_auto,e_sharpen:50,c_fill,g_auto/v1636348646/content/shutterstock/FI/rovaniemi_3", target: "DiyPage/Diyview", title:"4444444455555555555555555555555555555444"},
    { url:"https://mblogthumb-phinf.pstatic.net/MjAyMjAzMjRfNTcg/MDAxNjQ4MDg1MTgxMDM3.bAq_2YbMdcgm2LXEradc4LdjcNL90ltQqlZWTJ9GvFwg.9Ve6rojkneVGoBTCpRskuXs9e6vQeEKjtnSXA4wYKPIg.JPEG.travelgeo/IMG_3753.jpg?type=w800", target: "DiyPage/Diyview", title: "서울에 대해"},
];
const Link123=(e)=>{
    navigate(e)
  }
return(
   
    <>  
    <Contetn2Item2Css ><Left>
        {slideCk !==0?    <LegtBtn onClick={()=>{chslide(100)}}><img src={img1}></img></LegtBtn>: <></>  }
        </Left>
    <Slide>
    {slides.map((slide, index) => (
        <Content1 move={slideCk*3.7} >
      <AS key={index} onClick={()=>{Link123(slide.target)}}>
   
        <div className="item1" > <img src={slide.url} alt={slide.title}  /></div> 
        <div className="item2" >   <p>{slide.title}</p></div> 
  
      </AS>
    
      </Content1>
  
    ))}
</Slide>
<Right>
{slideCk <-1?  <></> :  <RightBtn onClick={()=>{chslide2(100)}}><img src={img1}></img></RightBtn> }
</Right>
    </Contetn2Item2Css> 
  
    </>
)

}
export default Contetn2Item2;