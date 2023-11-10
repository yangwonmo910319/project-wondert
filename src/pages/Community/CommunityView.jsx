/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Replyview from "../../components/Community/Replyview";
import Reply from "../../components/Community/Reply"; 
import { useState } from "react";
import { useEffect } from "react";
import CommunityAxiosApi from "../../api/CommunityAxiosApi";


const CommunityCss = styled.div`

width: 80%;
margin: 0 auto;
`;
const Item1=styled.div`
width: 10%;border-left:  1px solid #808080;
`;
const Itemp=styled.div`
width: 20%;
border-left:  1px solid blue;
border-right:  1px solid blue;
`;
const Item2=styled.div`
width: 60%;
`;

const Item6=styled.div`
width: 10%;
background:white;


`;
const Content1=styled.div`
 margin-top: 10px;
  width: 100%;
  height: 25px;
  color:black;
  border:1px solid #808080;
  display: flex;
  font-size: 15px;
  text-align: center;
p{
  margin-top: 5px;


}

  
`;

const Content2=styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #808080;
  border-radius: 10px;
  text-align: center;
  display: flex;
  padding: 7px;
  margin-top: 10px;
`;

const Content3=styled.div`
  width: 100%;
  height: 50px;
  
  border-radius: 10px;
  text-align: center;
 
  padding: 7px;
  margin-top: 10px;

`;
const Item3=styled.div`

width: 100%;
display: flex;
`;


const Menu=styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  font-size: 25px;
  color:black;

  p{
    width: 180px; 

    border-bottom: 3px solid  #808080;
  }
`;
const CommunityView = () => {
  const userid=window.localStorage.getItem("userId");

  //링크로 게시글 넘버를 받음
const {num} = useParams();
//게시글 정보를담음
const [post,getPost]=useState('');
const [reply,getReply]=useState('');


const [replyInsert,setreplyInsert]=useState('');



useEffect(()=>{

  const createCommunity = async()=>{
     try {      
      const postDBdata =await CommunityAxiosApi.SelectOneCommunity(num);
      getPost(postDBdata.data);  
      const replyDBdata =await CommunityAxiosApi.SelectReply(num);
      getReply(replyDBdata.data)
   
    }
     catch(error){
   
      console.log(error);
     }
    
  }; createCommunity();

},[ ]);

const insertReply=(replyProps)=>{

  setreplyInsert(replyProps);
  const insertReply1 = async()=>{
    // getPost(postDBdata.data);  
  
    try {    
  
      const ReplyDBdata = await CommunityAxiosApi.insertReply2(userid,num,replyInsert);
    
  
  }catch(error){
  
    console.log(error);
   }
  }

insertReply1();
}

  return (
    <CommunityCss>

    
    <Link to="/Community"  style={{ textDecoration: "none"}}> <Menu><p>커뮤니티 게시판</p></Menu>
      </Link> 
      <Content1>                
        <Item2>  <p >제목 </p></Item2>
        <Item1>   <p  >글쓴이</p></Item1>
        <Itemp>  <p> 작성일</p></Itemp>
        <Item6>   <p > 조회수</p></Item6>
   
        </Content1>
                        
    {post&&post.map((board)=>(   
      <>
       <Content1 key={board.no}>                
        <Item2>  <p >{board.title}  </p></Item2>
        <Item1>   <p  >{board.uerId}</p></Item1>
        <Itemp>  <p> {board.reportingDate}</p></Itemp>
        <Item6>   <p > {board.views}</p></Item6>
   
        </Content1>                      

             <Content2>
                      {board.content}       
         </Content2> 
         </>    ))}
   
              
            <Replyview replydata={reply} replyInsert={replyInsert}/> 
          
             {/* {reply[0]?.travelComment || null} */}
       <Content3>
       <Item3>
        <Reply insertReply={insertReply}/>
      
         </Item3>
        
       </Content3>
       {/* <Content5></Content5> */}
   
    </CommunityCss>
  );
};

export default CommunityView;
