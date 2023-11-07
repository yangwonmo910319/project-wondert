
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const Serch=styled.div`
margin-left: 80px;
width: 70%;
height: 30px;
border-radius: 10px;
background-color: #dfdfdf;
display: flex;
`;
const SerchVar=styled.input`
width: 100%;
height: 30px;

`;
const SerchBtn=styled.button`
width: 60px;
height: 30px;

`;
const Write=styled.button`
width: 80px;
height: 30px;
background-color: #dfdfdf;
margin-left:70px ;
`;
        
        
        
        
        
        const Reply=()=>{

          return(
            <>
              
        <Serch>
          <SerchVar></SerchVar>
          <SerchBtn><p>확인</p></SerchBtn>
          <Link to="/Community">      <SerchBtn>취 소 </SerchBtn>  </Link>  
        </Serch>
            </>
          )
        }
        export default Reply;
        
        
        
        
        
      