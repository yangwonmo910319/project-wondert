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
const Imgurl2 =["https://img4.tmon.kr/cdn4/deals/2022/06/14/11551482302/summary_14779.jpg","144"];
const Imgurl3 =["http://img-kyowontour.kyowontour.com/hp/202310/20231012132433295crhfghqsyrihvee.png","555"];
const Imgurl4 =["http://img-kyowontour.kyowontour.com/hp/202311/20231108150930236xvmmxrhqmtmaicr.jpg","666"];
 

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
           <div  className="item3 " onClick={()=>{Link123(Imgurl2[1])}} onMouseOver={()=>{setImg(Imgurl2[0])}}> <div  className="item3-1"><h1># 춘천의 랜드마크</h1></div><div  className="item3-2"><h1>산과 호수를 잇는 국내 최장 케이블카</h1></div></div>
           <div className="item4 " onClick={()=>{Link123(Imgurl3[1])}} onMouseOver={()=>{setImg(Imgurl3[0])}}><div  className="item4-1"><h1># No.2</h1></div></div>
           <div  className="item5 " onClick={()=>{Link123(Imgurl4[1])}} onMouseOver={()=>{setImg(Imgurl4[0])}}><div  className="item5-1"><h1># No.3</h1></div></div>

        </div>
    

    </Contetn4Item1Css>
   
    </>
)

}
export default Contetn4Item1;