/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const CommunityCss = styled.div`

width: 80%;
margin: 0 auto;
`;
const Item1=styled.div`
width: 10%;border-left:  1px solid blue;;
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
  border:1px solid rgba(72, 100, 224, 1);
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
  border: 1px solid blue;
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
const Content4=styled.div`
width: 100%;
height: auto;
color: black;
display: flex;
margin: 10px 0;
border-bottom: 1px solid rgba(72, 100, 224, 0.2);

`;
const Content5=styled.div`
width: 100%;
height: auto;
border:1px solid rgba(72, 100, 224, 1);
border-radius:10px;
margin: 10px 0;
`;
const Item4=styled.div`
width: 80%;
height: auto;
margin-left: 30px;
display: flex;
flex-wrap: wrap;

word-break:break-all;
`;
const Item5=styled.div`
width: 80px;
height: auto;
margin-left: 10px;

`;
const Content3item=styled.div`
height: 32px;
border: 2px solid red;

`;
const Menu=styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  font-size: 25px;
  color:black;

  p{
    width: 180px; 

    border-bottom: 3px solid rgba(72, 100, 224, 1);;
  }
`;
const CommunityView = () => {
  const testboard=[{no:1,title:"테스트 게시물",name:"테스트",date1:"2002-2-2",view:15,content:"내용~~~~~테스트내용~~~~~~"}];
  const testre=[{nick:"test",ripple:"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"},{nick:"test2",ripple:"1111211111111111111111111111111111111111"}]
  return (
    <CommunityCss>
    <Link to="/Community"  style={{ textDecoration: "none"}}> <Menu><p>커뮤니티 게시판</p></Menu>
      </Link> 

        {testboard.map((board)=>(  
       <Content1>
       
        <Item2>  <p >{board.title}  </p></Item2>
        <Item1>   <p  >{board.name}</p></Item1>
        <Itemp>  <p> {board.date1}</p></Itemp>
        <Item6>   <p > {board.view}</p></Item6>
   
        </Content1>
                        
                        ))}
    
 
                 <Content2>
                 {testboard[0].content} 
        
           
            </Content2> 
            <Content5>
            {testre.map((re)=>(  
            <Content4>
                <Item4>
                 <p> {re.ripple}</p>
                 </Item4>
                 <Item5><p>{re.nick}</p>
           
                  
                 </Item5> 
            </Content4>
                 ))}
                  </Content5>
       <Content3>
       <Item3>
        <Serch>
          <SerchVar></SerchVar>
          <SerchBtn><p>확인</p></SerchBtn>
          <Link to="/Community">      <SerchBtn>취 소 </SerchBtn>  </Link>  
        </Serch>
      
         </Item3>
        
       </Content3>
       {/* <Content5></Content5> */}
   
    </CommunityCss>
  );
};

export default CommunityView;
