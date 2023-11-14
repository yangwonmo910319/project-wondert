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
input{
  width: 100%;
  text-align: center
  ;
}
`;

const Item6=styled.div`
width: 10%;
background:white;


`;
const Content1=styled.div`
 margin-top: 10px;
  width: 100%;
  height: auto;
  color:black;
  border:1px solid #808080;
  display: flex;
  font-size: .8em;
  text-align: center;
p{
  margin-top: 5px;


}

  
`;
const Contentinput=styled.textarea`
  width:100%;
  height:100%;
`
const Content2=styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #808080;
  border-radius: 10px;
  text-align: center;
  display: flex;
  padding: 7px;
  margin-top: 10px;

  .content1{
     width: ${props =>props.a}%;
        height: 100%;

  
  }
  .img1{
    width:${props =>100- props.a}%;
    height: 100%;
   margin: 0 auto;
      img{
        width:90%
      }
  }
`;
const Editbtn=styled.button`
margin: 0 auto;
    width: 20%;
    padding: 3px;
`;
const Deletebtn=styled.button`
    width: 20%;
      padding: 3px;
      margin: 0 auto;
      margin-left: 10px;
`;

const Content3=styled.div`
  width: 100%;
  height: 50px;
  
  border-radius: 10px;
  text-align: center;
 
  padding: 7px;
  margin-top: 10px;

`;
const Content4=styled.div`
  width: 100%;
  height: 65px;  
  border-radius: 10px;
  text-align: center;
  border: 1px solid black;
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
  const login=window.localStorage.getItem("isLogin");
  const [author , setAuthor] = useState('');
  const [title , setTitle] = useState('');
  const [content , setcontent] = useState('');
  const editTitle =(e) =>{
    setTitle(e.target.value);
  }
  const editContent =(e) =>{
    setcontent(e.target.value);
  }
  //링크로 넘어온 글 번호를 저장
const {num} = useParams();
//데이터베이스에서 넘어온 글을담음
const [post,getPost]=useState('');
//데이터베이스에서 넘어온 댓글을 담음
const [reply,getReply]=useState('');
//useEffect는 reset값이 바뀌면 실행되게 작성. 
//댓글 추가,삭제 axios를 실행 후 reset값을 바꿔서 useEffect를 실행하여 추가 삭제된 화면을 새로 보여줌
const [reset,setReset]=useState(false);
//게시글 보여줄때 실생하여 글과 댓글을 데이터베이스에서 가져오고 
//종속성배열을 이용하여  reset 값이 바뀌면 useEffect가실행
useEffect(()=>{
  //데이터 베이스에서 글과댓글을 가져오는 기능을 만듬(실행은 별도)
  const createCommunity = async()=>{
     try {      
      //글을 가져오는 axios실행
      const postDBdata =await CommunityAxiosApi.SelectOneCommunity(num);
       //가져온 글을 getPost통해 저장
      getPost(postDBdata.data);  
      setTitle(postDBdata.data[0].title);
      setAuthor(postDBdata.data[0].userId);
      setcontent(postDBdata.data[0].content);   
       //댓글을 가져오는 axios실행
      const replyDBdata =await CommunityAxiosApi.SelectReply(num);
      //가져온 댓글을 getReply통해 저장
      getReply(replyDBdata.data)   
    }
     catch(error){   
      console.log(error);
     }    
  };
  //createCommunity를 실행
   createCommunity();
    //[ reset]으로 reset값이 바뀌면 글과댓글을 다시 가져옴
},[ reset]);

   //댓글 확인버튼을 누르면 실행
const insertReply=(replyProps)=>{    
      //데이터 베이스에서 댓글을 추가하는 기능을 만듬!!!(실행은 별도)
  const insertReply1 = async()=>{
    try {    
        const ReplyDBdata = await CommunityAxiosApi.insertReply2(userid,num,replyProps);
        }catch(error){  
    console.log(error);
   }
  }
  //만든 기능을 실행(댓글 추가 axios실행)
insertReply1();
//reset값을 변경하여 댓글이 추가된 화면을 보여줌
setReset(!reset);
}
//댓글 삭제 버튼을 누르면 실행
const deleteReply=(deleteNum)=>{    
  //댓글을 삭제할 기능을 만듬
  const deleteReply1 = async()=>{
    try {   
        //(deleteNum)는 댓글 번호가 담겨있고 번호를 axios로 넘겨 해당 글을 삭제
    const ReplyDBdata = await CommunityAxiosApi.deleteReply(deleteNum);
        }catch(error){  
    console.log(error);
   }
  }
    //댓글을 삭제할 기능을 실행
  deleteReply1();
  //reset값을 변경하여 댓글이 삭제된 화면을 보여줌
  setReset(!reset);
}
//댓글 업데이트 버튼을 누르면 실행
const updateReply=({newReply},{replyNum})=>{    
  // const updateReply=(rewReply,replyNum)=>{    
  //댓글을 업데이트 기능을 만듬
  const updateReply1 = async()=>{
    try {   
        //(deleteNum)는 댓글 번호 newReply는 새로운 댓글이 담겨있고 번호를 axios로 넘겨 해당 글을 삭제
    const ReplyDBdata = await CommunityAxiosApi.updateReply(replyNum,newReply);
        }catch(error){  
    console.log(error);
   }
  }
    //댓글을 업데이트 기능을 실행
    updateReply1();
  //reset값을 변경하여 댓글 업데이트 화면을 보여줌
  setReset(!reset);
}
const UpdateCommunity=()=>{ 
  //게시글 업데이트 기능을 만듬
  const update = async()=>{
    try {             
    const DBupdate = await CommunityAxiosApi.UpdateCommunity(num,title,content);
        }catch(error){  
    console.log(error);
   }
  }
    //게시글 업데이트 기능을 실행
    update();
  //reset값을 변경하여 댓글 업데이트 화면을 보여줌
  setReset(!reset);
}
const DeleteCommunity=()=>{ 
  //게시글 삭제 기능을 만듬
  const delete1 = async()=>{
    try {             
    const DBupdate = await CommunityAxiosApi.DeleteCommunity(num);
        }catch(error){  
    console.log(error);
   }
  }
    //게시글 삭제 기능을 실행
    delete1();
  //reset값을 변경하여 댓글 업데이트 화면을 보여줌
  setReset(!reset);
}
  return (
    <CommunityCss>    
    <Link to="/Community"  style={{ textDecoration: "none"}}> <Menu><p>커뮤니티 게시판</p></Menu></Link> 
      <Content1>                
        <Item2>  <p >제목 </p></Item2>
        <Item1>   <p  >글쓴이</p></Item1>
        <Itemp>  <p> 작성일</p></Itemp>
        <Item6>   <p > 조회수</p></Item6>   
        </Content1>     
    {post&&post.map((board)=>(   
      <>
       <Content1 key={board.no}>{
     
       author !==userid? 
           //제목- 작성자와 로그인 아이디가 다르면 수정 불가 :   같으면 input으로 수정
       <Item2>{title}</Item2>  :  <Item2> <input type="text" value={title} onChange={editTitle}/>  </Item2> }
        <Item1>   <p  >{board.userId}</p></Item1>
        <Itemp>  <p> {board.reportingDate}</p></Itemp>
        <Item6>   <p > {board.views}</p></Item6>
        </Content1>   
        {/* 내용-작성자와 로그인 아이디가 다르면 수정 불가 :   같으면 input으로 수정 */}
              {/* 이미지 파일이 없으면 내용만 100% 넓이로 출력 있으면 텍스트와이미지를  나누어 으로 출력 */}
       {author !==userid?   !board.imgurl ?  
        <Content2 a={100} >{content}</Content2>         
       : <Content2 a={50}>
        <div className="content1" style={{  borderRight:"1px solid black"}}  > {board.content}    </div> 
        <div className="img1">   <img src={board.imgurl}/>   </div> 
         </Content2>
          : 
         !board.imgurl ?   <Content2 a={100} ><Contentinput type="text" value={content} onChange={editContent} />
         </Content2>  :          <Content2 a={50}>
                    <Contentinput style={{  borderRight:"1px solid black"}}  type="text" value={content} onChange={editContent} > </Contentinput>
                    <div className="img1">  
                      <img src={board.imgurl}/>                      
                     </div> 
         </Content2>
         }


         </>    ))}  

         <Content4>
                  {/* 작성자와 로그인 아이디가 같으면 수정과 삭제 가능 */}
                  {author ===userid? <> <h1>본인 작성의 글은 수정후 수정완료를 누르시면 바로 변경됩니다.</h1>
         <Editbtn onClick={UpdateCommunity}>  수정 완료 </Editbtn>
          <Deletebtn onClick={DeleteCommunity}>  삭 제 </Deletebtn></>:
         <></>}
       </Content4>
      
       <Content3>
       <Replyview replydata={reply} deleteReply={deleteReply} updateReply={updateReply}/> 
       <Item3>
        <Reply insertReply={insertReply}/>      
         </Item3>        
       </Content3>
       </CommunityCss>
  );
};

export default CommunityView;
