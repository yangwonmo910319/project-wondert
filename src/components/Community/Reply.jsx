
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";


const Search=styled.div`
margin-left:  80px;
width: 70%;
height: 30px;
border-radius: 10px;
background-color: #dfdfdf;
display: flex;
margin-top: 10px;
`;
const SearchVar=styled.input`
border-radius:10px;
width: 100%;
height: 30px;

`;
const SearchBtn=styled.button`
width: 60px;
height: 30px;
border-radius:5px ;
margin-left: 10px;
 background-color:  #F4CE14;;
`;
const Write=styled.button`
width: 80px;
height: 30px;
background-color: #dfdfdf;
margin-left:70px ;
`;
    
  const Reply=({insertReply})=>{
    const [inputValue, setInputValue] = useState(''); // 상태 추가

    const handleInputChange = (event) => {    
      setInputValue(event.target.value);
    };
    const onClick1=()=>{
   
      insertReply(inputValue);
    
    };

    return(

      <>
       
        <Search>
        <SearchVar
          value={inputValue}
          onChange={handleInputChange} // 입력 값 변경 시 핸들러 호출
        />
        <SearchBtn onClick={onClick1}>
          <p>확인</p>
        </SearchBtn>
        <Link to="/Community">
          <SearchBtn>취 소</SearchBtn>
          
        </Link>

      </Search>

 
      </>
    )
  }
  export default Reply;
  
        
        
        
        
      