import { useState } from "react";
import styled, { css } from "styled-components";
const Contetn4Item1Css = styled.div`
  font-size: 1.5em;
  width: 100%;
  object-fit: cover;
  background-image: url(${(props) => props.img2});
  height: 700px;
  background-size:  100% 100%; /* 가로 너비에 맞게 늘어남 */
  background-repeat: no-repeat;
  position: relative;

  .item1 {
    display: flex;
    color: white;

    .item2,.item3,.item4,.item5{
      width: 25%;
      height: 700px;
    background-color: rgba(0, 0, 0, 0.5); 
      border: 1px solid white;
      display: flex;
      flex-direction:column;
      justify-content: start;
      position: relative;
      align-items: end;
    .item3-1,.item4-1,.item5-1{ 
   width: 90%;
  height:50px;

 position: absolute;
 bottom: 0;
 margin-bottom:130px ;
 font-size: 1.3em;
        }
        .item3-2,.item4-2,.item5-2{ 
          width: 100%;
  height:60px;

  position: absolute;
  margin-bottom:75px ;
 bottom: 0;
 font-size: 1em;
  text-align: center;

        }
    }
    div:hover {
      background-color: rgba(0, 0, 0, 0);
    }
    h1 {
      margin-left: 30px;
      margin-bottom: 30px;
    }
 
  .item2{
    display: flex;
    flex-direction: column;
    position: relative;
.item2-1{
  width: 90%;
  height:50px;

 position: absolute;
 bottom: 0;
 margin-bottom:130px ;
 font-size: 1.3em;

}
.item2-2{
  width: 100%;
  height:60px;

  position: absolute;
  margin-bottom:75px ;
 bottom: 0;
 font-size: 1em;
  text-align: center;
}
  }
}
`;
const Contetn4Item1=()=>{
 const [Img1,setImg]=useState("http://img-kyowontour.kyowontour.com/hp/202310/20231012132433295crhfghqsyrihvee.png");
const Imgurl1 =["http://img-kyowontour.kyowontour.com/hp/202310/20231012132433295crhfghqsyrihvee.png","123"];
const Imgurl2 =["https://cf.bstatic.com/xdata/images/hotel/max1024x768/55025714.jpg?k=ccd362a0f43fd0277eac12c075483d8c11442d4275923cd29e21238889cd313d&o=&hp=1","144"];
const Imgurl3 =["https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%9D%B8%EC%B2%9C%2F%E1%84%8F%E1%85%A9%E1%84%90%E1%85%A1%E1%84%8F%E1%85%B5%E1%84%82%E1%85%A1%E1%84%87%E1%85%A1%E1%86%AF%E1%84%85%E1%85%AE3.jpeg?alt=media&token=b9b979c7-1edf-474a-aab7-10e5707ba6f8","555"];
const Imgurl4 =["https://firebasestorage.googleapis.com/v0/b/wonderwalker-260db.appspot.com/o/%EC%9D%B8%EC%B2%9C%2F%E1%84%86%E1%85%B5%E1%84%80%E1%85%AE%E1%86%A83.jpeg?alt=media&token=5d4099df-8c50-4bd0-b512-dcee28c75dbc","666"];
 

const Link123=(e)=>{
  alert(e);
}
return(
    <>
    <Contetn4Item1Css img2={Img1}>
        <div className="item1">
           
         
           <div className="item2" >
            <div className="item2-1">  <p>여행자들의 추천</p></div>
            <div className="item2-2"><p>가장 사랑받는 여행지<br></br> 이렇게 즐겨보세요</p></div></div>
           <div  className="item3 " onClick={()=>{Link123(Imgurl2[1])}} onMouseOver={()=>{setImg(Imgurl2[0])}}> <div  className="item3-1"><h1># 마카오 </h1></div><div  className="item3-2"><h1>맛과 즐거움이 가득한</h1></div></div>
           <div className="item4 " onClick={()=>{Link123(Imgurl3[1])}} onMouseOver={()=>{setImg(Imgurl3[0])}}><div  className="item4-1"><h1># 말레이시아</h1></div><div  className="item4-2"><h1>눈부신 여행이야기</h1></div></div>
           <div  className="item5 " onClick={()=>{Link123(Imgurl4[1])}} onMouseOver={()=>{setImg(Imgurl4[0])}}><div  className="item5-1"><h1># 부산 해운대</h1></div><div  className="item5-2"><h1>즐거운 겨울바다</h1></div></div>

        </div>
    

    </Contetn4Item1Css>
   
    </>
)

}
export default Contetn4Item1;