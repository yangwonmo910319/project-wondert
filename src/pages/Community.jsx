/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const CommunityCss = styled.div`

max-width: 1200px;
white-space:nowrap;
width: 80%;
margin: 0 auto;
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
width: 100%;
height: 100px;
border: 2px solid blue;

`;
const Content3item=styled.div`
height: 32px;
border: 2px solid red;

`;

const Community = () => {
  const testboard=[{no:1,title:"테스트 게시물",name:"테스트",date1:"2002-2-2",view:15},
  {no:2,title:"테스트 게시물2",name:"테스트2",date1:"20/02/19",view:15},
  {no:3,title:"테스트 게시물3",name:"테스트3",date1:"20/02/19",view:15},
  {no:4,title:"테스트 게시물4",name:"테스트4",date1:"20/02/19",view:15},];
  return (
    <CommunityCss>
       <Content1><p>커뮤니티 게시판</p></Content1>
       <Content2>
        <Item1><p>No</p></Item1>
        <Item2>  <p >제목</p></Item2>
        <Item1>   <p  >글쓴이</p></Item1>
        <Item1>  <p  >등록일</p></Item1>
        <Item1>   <p  >조회수</p></Item1>
        </Content2>
       
       {testboard.map((board)=>(   <Link to={`/Communityview/${board.no}`} > 
                 <Content3 > 
               
               
           <Item1>{board.no} </Item1> 
           <Item2> {board.title}    </Item2> 
           <Item1>   {board.name}</Item1> 
           <Item1>  {board.date1}</Item1> 
           <Item1>    {board.view}  </Item1> 
      
            </Content3>        </Link> 
                   
           ))}
           {/* 테스트용---------------------------------- */}
                  {testboard.map((board)=>(  
                 <Content3>
           <Item1>{board.no} </Item1> 
           <Item2> {board.title}    </Item2> 
           <Item1>   {board.name}</Item1> 
           <Item1>  {board.date1}</Item1> 
           <Item1>    {board.view}  </Item1> 
           
            </Content3>      
                   
           ))}

       <Content4>
       <Item3>
        <Serch>
          <SerchVar></SerchVar>
          <SerchBtn><p>검색</p></SerchBtn>
        </Serch>
        <Link to="/Communitywrite"><Write><p>글 쓰기</p></Write></Link>
         </Item3>
        
       </Content4>
       {/* <Content5></Content5> */}
      
    </CommunityCss>
  );
};

export default Community;