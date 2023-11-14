/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import UserAxiosApi from "../api/CommunityAxiosApi";
import { useState } from "react";
import CommunityModal from "../components/Community/CommunityModal";
import { Pagination } from "../components/Community/Pagination";
import {CommunityListMap} from "../components/Community/communityListMap"; // 수정된 부분

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

width: 140px;
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
  const [search,setSearch] =useState("");
 const isLoggedin = window.localStorage.getItem("isLogin") === 'true';

 //출력데이터
const [posts, setPosts] = useState([]);
const [postsList, setPostsList] = useState([]);
//현재 페이지
const [currentPage, setCurrentPage] = useState(1);
//페이지당 출력 수
const [postsPerPage, setPostsPerPage] = useState(10);
//검색창 입력시 검색값을 입력.
const onSearch=(e)=>{
  setSearch(e.target.value);  
}
const SearchClick = (e) => {
  const filteredData = posts.filter((item) =>
  item.title.toLowerCase().includes(search.toLowerCase()));
  // setPosts를 사용하여 필터링된 결과를 상태로 업데이트합니다.
  setPostsList(filteredData);
  setSearch('');
 
};
  useEffect(()=>{  
    const onUserCheck=async()=>{   
      const res = await UserAxiosApi.SelectAllCommunity();      
      if(res.status===200){
        setPosts(res.data);      
        setPostsList(res.data);     
         } else{
console.log("게시글이 없습니다.");

    }
  };
  onUserCheck();
},[]);
const firstPostIndex = (currentPage - 1) * postsPerPage;
const lastPostIndex = firstPostIndex + postsPerPage;
const currentPosts = postsList.slice(firstPostIndex, lastPostIndex);

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};
  
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

               <CommunityListMap list={currentPosts} />
               <Content3>   <Pagination
          postsNum={postsList.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange} 
        />
        </Content3>
       <Content4>
       <Item3>
        <Serch>
          <SerchVar value={search} onChange={onSearch} onKeyDown={(e) => e.key === 'Enter' && SearchClick(e)} ></SerchVar>
          <SerchBtn onClick={SearchClick}><p>검색</p></SerchBtn>
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