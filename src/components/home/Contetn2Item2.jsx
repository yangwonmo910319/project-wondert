import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../images/화살표.png"

const Contetn2Item2Css=styled.div`
width: 100%;
height: 280px;
display: flex;
`;
const Slide=styled.div`


 height: 500px;
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
 height: 300px;
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
  height: 100px;
  margin-top: -10px;  

 p{
    margin-top: 5px;  
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
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MxWUYaVzl4C__DyqsnCAVd4hUTQqt8qn_w&usqp=CAU", target: "T1", title:"여자혼자 제주 먹방 여행, 제주도 1박2일 여행코스'",thema:'# 먹방여행', area:'# 제주도'},
    { url:"https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%84%A0%EC%98%81%2F%EA%B5%AD%EB%82%B4-%20%EB%A8%B9%EB%B0%A9%EC%97%AC%ED%96%89%2F2.%20%E1%84%87%E1%85%AE%E1%84%89%E1%85%A1%E1%86%AB%202%E1%84%87%E1%85%A1%E1%86%A8%203%E1%84%8B%E1%85%B5%E1%86%AF%203%E1%84%8B%E1%85%B5%E1%86%AF%E1%84%8E%E1%85%A1%202.jpg?alt=media&token=cc216ddb-7a1d-4fb8-babd-6950c48ac89b",link:"DiyPage/Diyview", target: "T31", title:"혼자 떠나는 부산 요트홀릭 프리미엄 투언",thema:'# 먹방여행', area:'# 부산'},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxLYoIeq1d2gAh20MrDa44rI3kYYNGOOJeWQ&usqp=CAU",link:"DiyPage/Diyview", target: "T33", title:" 여수 블루망고 풀빌라  리조트 ",thema:'# 프리미엄', area:'# 여수'},
    { url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTJfMjcg%2FMDAxNjk0NDk0NjAxMTY2.0S-TDXfa11lohXm39856H2iCU35mW3VgbLWxxbZO8o4g.pgYs9YIt7sIsIzyOTCXbNLwPQ3lLB2Vq5QADOHw5SCkg.JPEG.pickmom%2F3472522898104760660_20230911235828760.JPG&type=a340",link:"DiyPage/Diyview", target: "T34", title:"전주 프리미엄 스시 스시아시타",thema:'# 프리미엄', area:'# 전주'},
    { url:"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20140320_277%2Fqhdhr7835_1395312954303o5Eo4_JPEG%2F%25BB%25E7%25C1%25F8_091.jpg&type=a340",link:"DiyPage/Diyview", target: "T39", title:", '간단한 2박3일 후쿠오카여행기'",thema:'# 먹방여행', area:'# 일본'},
    { url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoKC0i0s3LXCFdz3MsPGP4JMRTtOIBpp1cHQ&usqp=CAU",link:"DiyPage/Diyview", target: "T40", title:"20만원으로 중국 내몽골(내몽고)",thema:'# 먹방여행', area:'# 중국'},
]; 
const Link123=(e)=>{
    window.localStorage.setItem("travelNum",e);
    navigate("/Diypage/DiyView");
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
        <div className="item2" >
        <p>{slide.thema}</p>
        <p>{slide.area}</p>
        <p>{slide.title}</p>

        </div> 
  
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