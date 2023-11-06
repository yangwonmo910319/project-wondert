/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const CommunityCss = styled.div`
width: 80%;
margin: 0 auto;
`;
const Item1=styled.div`
width: 10%;
`;
const Itemp=styled.div`
width: 20%;
`;
const Item2=styled.div`
width: 60%;
`;
const Content1=styled.input`
 margin-top: 10px;
  width: 100%;
  height: 25px;
  color:black;
  border:1px solid rgba(72, 100, 224, 1);
border-radius: 5px;
  font-size: 15px;

p{
  margin-top: 5px;
  border-right: 1px solid blue;
}
  
`;
const Content2=styled.input`
  width: 100%;
  height: 500px;
  border: 1px solid blue;
  border-radius: 10px;
  padding: 7px;
  margin-top: 10px;
`;

const Content3=styled.div`
margin: 0 auto;
  width: 35%;
  height: 50px;
  border-radius: 10px;
  text-align: center; 
  padding: 7px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

`;
const Item3=styled.button`
  width: 100px;
  height: 40px;
 
    /* border:1px solid red; */
    background-color:#dfdfdf;
    border-radius: 10px;
     &:active{
   
      background:rgba(72, 100, 224, 1);
    }
`;
const Content4=styled.div`
   margin-top: 10px;
  width: 100%;
  height: 25px;
  color:black;
  border:1px solid rgba(72, 100, 224, 1);
border-radius: 5px;

`




const Menu=styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  font-size: 25px;
  p{
    width: 180px;
    border-bottom: 3px solid rgba(72, 100, 224, 1);;
  }
`;


const CommunityView = () => {
  return (
    <CommunityCss>      
    <Menu><p>커뮤니티 게시판</p></Menu>
       <Content1 placeholder={"제목"}  >
           </Content1>
              <Content2  placeholder={"내용"} >        
            </Content2>   
            <Content4>파이어 베이스 이미지 추가 
       </Content4> 
       <Content3>

       <Item3 >확 인 </Item3>
       <Link to="/home">    <Item3>취 소 </Item3>    </Link>  
       </Content3> 

    </CommunityCss>
  );
};

export default CommunityView;
