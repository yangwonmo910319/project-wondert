
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const Content4=styled.div`

width: 100%;
height: auto;
color: black;
display: flex;
margin: 10px 0;
border-bottom: 1px solid rgba(60, 61, 63, 0.4);

`;
const Content5=styled.div`
width: 100%;

height: auto;
border:2px solid #5b5c60;
border-radius:10px;
margin: 10px 0;
`;
const Item4=styled.div`
width: 80%;
height: auto;
margin-left: 30px;
padding: 3px;
word-break:break-all;
`;
const Item5=styled.div`
width: 80px;
height: auto;

text-align: center;
line-height: 10px;
margin-left: 10px;

`;
        const Reply=(props)=>{
    
          return(
            <>
             {/* {props.replydata&&props.replydata.map((reply, index) => (
        <div key={index}>
       
          <p>Username: {reply.userId}</p>
          <p>Comment: {reply.travelComment}</p>
   
        </div>
      ))} */}
            <Content5>        
           {props.replydata&&props.replydata.map((re)=>(  
            <Content4>
              
                <Item4>
                 <p> {re.travelComment}</p>
                 </Item4>
                 <Item5><p>{re.userId}</p>     
                 </Item5> 

            </Content4>
                 ))} 
                  </Content5>
            </>
          )
        }
        export default Reply;
        
        
        
        
        
      