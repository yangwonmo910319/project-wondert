/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserAxiosApi from "../api/CommunityAxiosApi";
import { useState } from "react";
import CommunityModal from "../components/Community/CommunityModal";

const CommunityCss = styled.div`
max-width: 1200px;
white-space:nowrap;
width: 80%;
margin: 0 auto;
.LinkCss{
  color:black;
  text-decoration: none;
}

`;
const Content1=styled.div`
  width: 100%;
  height: 50px;

  margin-top: 100px;
  font-size: 25px;
  p{
    width: 180px;
    border-bottom: 3px solid rgba(72, 100, 224, 1);;
  }
`;
const Item1=styled.div`

width: 130px;
`;
const Item2=styled.div`
width: 100%;


`;
const Content2=styled.div`
  width: 100%;
  height: 25px;
  color:white;
  background: rgba(72, 100, 224, 1);
  display: flex;
  font-size: 14px;
  text-align: center;
p{
  margin-top: 5px;
  border-right: 1px solid blue;

}

  
`;
const Content3=styled.div`
  width: 100%;
  height: auto;
  border: 1px solid blue;
  border-radius: 10px;
  text-align: center;
    display: flex;
  padding: 7px;
  margin-top: 10px;


`;
const Content4=styled.div`
  width: 100%;
  height: 100px;


`;
const Item3=styled.div`
margin-top: 40px;
width: 100%;
display: flex;
`;
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

const Content5=styled.div`
display: ${props => (props.color ? 'none' : 'black')};
`
const Community = () => {
 const isLoggedin = window.localStorage.getItem("isLogin") === 'true';
const [communityList,setCommunityList]=useState("");
  useEffect(()=>{  
    const onUserCheck=async()=>{    
       const res = await UserAxiosApi.SelectAllCommunity();
    if(res.status===200){
      setCommunityList(res.data);
    }else{
console.log("게시글이 없습니다.");
alert("게시글이 없습니다.");
    }
  };
  onUserCheck();
},[])
  
  return (
    <CommunityCss>
         <Content5>
  
       <Content1><p>커뮤니티 게시판</p></Content1>
       <Content2>
        <Item1><p>No</p></Item1>
        <Item2>  <p >제목</p></Item2>
        <Item1>   <p  >글쓴이</p></Item1>
        <Item1>  <p  >등록일</p></Item1>
        <Item1>   <p  >조회수</p></Item1>
        </Content2>
       
       {communityList&&communityList.map((community)=>(  
         <Link className="LinkCss" to={`/Communityview/${community.communityNum}`} > 
          <Content3 key={community.no}>               
           <Item1>{community.communityNum} </Item1> 
           <Item2> {community.title}    </Item2> 
           <Item1>   {community.uerId}</Item1> 
           <Item1>  {community.reportingDate}</Item1> 
           <Item1>    {community.views}  </Item1>       
          </Content3>
         </Link> 
                   
           ))}  
       <Content4>
       <Item3>
        <Serch>
          <SerchVar></SerchVar>
          <SerchBtn><p>검색</p></SerchBtn>
        </Serch>
{isLoggedin ?       
 <Link to="/Communitywrite"><Write><p>글 쓰기</p></Write></Link>
 : <></>
}
 

         </Item3>
        
       </Content4>
                
  </Content5>

    </CommunityCss>
  );
};

export default Community;