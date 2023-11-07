/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Replyview from "../../components/Community/Replyview";
import Reply from "../../components/Community/Reply"; 
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
  const testboard=[{no:1,title:"테스트 게시물",name:"테스트",date1:"2002-2-2",view:15,content:"내용~~~~~테스트내용~~~~~~"}];
  
  return (
    <CommunityCss>
    <Link to="/Community"  style={{ textDecoration: "none"}}> <Menu><p>커뮤니티 게시판</p></Menu>
      </Link> 

        {testboard.map((board)=>(      
       <Content1       key={board.no}>
               
        <Item2>  <p >{board.title}  </p></Item2>
        <Item1>   <p  >{board.name}</p></Item1>
        <Itemp>  <p> {board.date1}</p></Itemp>
        <Item6>   <p > {board.view}</p></Item6>
   
        </Content1>
                        
                        ))}
    
 
                 <Content2>
                 {testboard[0].content} 
        
           
            </Content2> 
            <Replyview>
              
            </Replyview>

       <Content3>
       <Item3>
        <Reply></Reply>
      
         </Item3>
        
       </Content3>
       {/* <Content5></Content5> */}
   
    </CommunityCss>
  );
};

export default CommunityView;
