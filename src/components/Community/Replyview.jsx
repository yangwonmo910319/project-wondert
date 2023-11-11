
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Reply1 from "./Reply"; 
import { useState } from "react";

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
input{
  width: 90%;
}
button{

}
`;
const Item5=styled.div`
width: 80px;
height: auto;

text-align: center;
line-height: 10px;
margin-left: 10px;

`;
const SearchBtn=styled.button`
width: 30px;
height: 30px;
border: none;
margin-top: -10px;
background-image:url("data:image/png;base64,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");
background-size: 100%;
`;
const SearchBtn2=styled.button`
width:  30px;
height: 30px;
border: none;
margin-top: -10px;
background-image:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMd4WjyWV7qpx26Y1rk6APLzwvi8RDd-vPw&usqp=CAU");
background-size: 100%;
`;
        const Reply=(props)=>{
          const userid=window.localStorage.getItem("userId");
           const [updateReply,setUdateReply] =useState(false);
           const [replyNum,setReplyNum] =useState('');
           const [newReply,setNewReply] =useState('');
           const newReplyChange = (e) => {
            setNewReply(e.target.value);
          };
          const newReplyUpdate = () => {
            // props.updateReply(newReply,replyNum);
            props.updateReply({newReply},{replyNum});
            setNewReply('')
            setUdateReply(!updateReply)
          };

          return(
            <>
            <Content5>        
           {props.replydata&&props.replydata.map((re)=>(  
            <Content4>
              
                <Item4>
                   
                 {re.travelComment}   
                 {updateReply===true&&re.userId===userid&&replyNum===re.commentNum
                 &&<><br></br><input type="text" value={newReply}
                 onChange={newReplyChange}
                 ></input>
                 <button onClick={newReplyUpdate}>확인</button>
                 </>                 
                }        
                 </Item4>
                 <Item5><p>{re.userId}</p>     
                 
                     </Item5>
                 {userid=== re.userId&&
                 <>                        
                          <SearchBtn2 onClick={()=> {setUdateReply(!updateReply);setReplyNum(re.commentNum)}} />
                          <SearchBtn onClick={()=>{props.deleteReply(re.commentNum)}} />
                          </>          
                 }
              

              
            
        

            </Content4>
                 ))} 
                  </Content5>
            </>
          )
        }
        export default Reply;
        
        
        
        
        
      