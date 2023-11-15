import { useEffect } from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import DiyAxiosApi from "../../api/DiyAxiosApi";

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
`;



const Item2=styled.div`
margin-top: 15px;
padding: 10px;
font-size: 1.4em;
margin-left:60px ;
`;
const Item3=styled.div`
display: flex;
margin-top: 5px;
`;

const FavorDiyitem = ({type,type2}) => {
  
  const [list ,setList ]= useState('');
 
  useEffect(()=>{
   
    const createCommunity = async()=>{
       try {      
        const postDBdata =await DiyAxiosApi.SelectFavor(window.localStorage.getItem("userId"));     
         
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
             
             <Item2 >제목:  {it.travel_title}</Item2>
                    <Item3>
                   
                    <Item2>나라:{it.travel_world}</Item2>
                    <Item2>지역:{it.travel_area}</Item2>
                    <Item2>테마:{it.travel_theme}</Item2>
                    </Item3>
                    <Item3>

                    <Item2>여행 시작 : {it.travel_startdate}</Item2>
                    <Item2>여행 종료 :{it.travel_enddate}</Item2>
                    </Item3>
                   </Item1>
                
                   
           ))}
     
      </FavorDiyitemCss>
 
  );
};

export default FavorDiyitem;
