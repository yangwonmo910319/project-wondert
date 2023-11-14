import { useState } from "react";
import styled, { css } from "styled-components";
const Contetn4Item1Css = styled.div`
  font-size: 1.5em;
  width: 100%;
  object-fit: cover;
  background-image: url(${(props) => props.img2});
  height: 700px;
  background-size: 100% 100%; /* 가로 너비에 맞게 늘어남 */
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
 const [Img1,setImg]=useState("http://img-kyowontour.kyowontour.com/hp/202211/20221129103350934brgzdggfnwtwqqf.jpg");
const Imgurl1 ="http://img-kyowontour.kyowontour.com/hp/202308/20230808161029767fjihgdtsawdisoh.jpg";
const Imgurl2 ="http://img-kyowontour.kyowontour.com/hp/202211/20221129103350934brgzdggfnwtwqqf.jpg";
const Imgurl3 ="http://img-kyowontour.kyowontour.com/hp/202310/20231012132433295crhfghqsyrihvee.png";
const Imgurl4 ="http://img-kyowontour.kyowontour.com/hp/202311/20231108150930236xvmmxrhqmtmaicr.jpg";
 


return(
    <>
    <Contetn4Item1Css img2={Img1}>
        <div className="item1">
           
         
           <div className="item2" >
            <div className="item2-1">  <p>여행자들의 추천</p></div>
            <div className="item2-2"><p>가장 사랑받는 여행지<br></br> 이렇게 즐겨보세요</p></div></div>
           <div  className="item3 " onMouseOver={()=>{setImg(Imgurl2)}}> <div  className="item3-1"><h1># No.1</h1></div><div  className="item3-2"><h1>황금빛 사막</h1></div></div>
           <div className="item4 " onMouseOver={()=>{setImg(Imgurl3)}}><div  className="item4-1"><h1># No.2</h1></div></div>
           <div  className="item5 " onMouseOver={()=>{setImg(Imgurl4)}}><div  className="item5-1"><h1># No.3</h1></div></div>

        </div>
    

    </Contetn4Item1Css>
   
    </>
)

}
export default Contetn4Item1;