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

  .item1 {
    display: flex;
    color: white;
    div {
      width: 25%;
      height: 700px;
      background-color: rgba(0, 0, 0, 0.5);
      border: 1px solid white;
      display: flex;
      justify-content: start;
      align-items: end;
    }
    div:hover {
      background-color: rgba(0, 0, 0, 0);
    }
    h1 {
      margin-left: 30px;
      margin-bottom: 30px;
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