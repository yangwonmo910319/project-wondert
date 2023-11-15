import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import DiyAxiosApi from "../../api/DiyAxiosApi";
import CourseAxiosApi from "../../api/CourseAxiosApi";
import AxiosApi from "../../api/AxiosApi";

const FavorDiyitemCss = styled.div`

  width: 80%;
height: auto;
margin-top: 30px;
display: flex;
flex-direction: column;
flex-wrap: nowrap;
margin-left:55px;

`;

const Item1 = styled.div`
width: 90%;
height: 200px;
border: 1px solid black;
border-radius: 10px;
margin-top: 30px;
display: flex;
`;



const Item2=styled.div`

padding: 10px;
font-size: 1.4em;
`;
const Item3=styled.div`
display: flex;
height: 100%;
img{
  width: 260px;
  height: 100%;
  border-radius: 10px;
}
`;
const Item4=styled.div`
width: 100%;
height: 45px;
overflow: hidden;


`;
const FavorGoodsItem = () => {
  
  const [list ,setList ]= useState('');

  useEffect(()=>{
   
    const createCommunity = async()=>{
       try {      
    
        const postDBdata =await AxiosApi.SelectFavor(window.localStorage.getItem("userId"));     
         
        if(postDBdata.status===200){
          setList(postDBdata.data);   

         }else{
          alert("실패") 
         }
      
       }catch(error){       alert("에러") 
        console.log(error);
       }    
    };

     createCommunity();
     console.log(list)
  },[ ]);
  
  return (
  
      <FavorDiyitemCss>
 
       
      {list&&list.map((it)=>(
                  <Item1>                
                         
      
                    <Item3>
                    <img src={it.i_main_img}></img>
                    </Item3>         
                    <Item2 >
                      <Item4><p></p>나라:  {it.i_name}</Item4>
                      <Item4>  지역:{it.price}</Item4>
                      <Item4>   지역:{it.tag}</Item4>
                      <Item4>   테마:{it.title}</Item4>
                      </Item2> 
                   </Item1>
                
                   
           ))}
     
      </FavorDiyitemCss>
 
  );
};

export default FavorGoodsItem;
