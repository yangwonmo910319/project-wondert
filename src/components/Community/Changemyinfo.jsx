/*원모 페이지 */
import styled, { css } from "styled-components";
const ChangemyinfoCss = styled.div`

margin-top: 50px;
  .memo {
    width: 500px;
    font-size: 25px;
    border-bottom: 5px solid rgba(72, 100, 224, 1);
    display: flex;
    p {
      font-size: 12px;
vertical-align: bottom;
      margin-left: 30px;
      margin-top: 10px;
   
    }
  }
`;

const InfoView = styled.div`
  width: 410px;
 margin-top: 50px;

  /* margin: 0 auto; */
  input {
    width: auto; 
    margin-left:50px ;
    border: 1px solid rgba(73, 94, 87, 0);
  }
  ul > :first-child{
    border-top: 0.5px solid #b3b3b3;
  }
  ul{
    width: 100%;
    height: 100%;
  }
  li {
    display: flex;
 background-color: #f5f5f5da;
    padding: 5px;
    border-top: 0.5px solid #b3b3b3;
  
   
  }
  
`;
const ChangnBtn = styled.button`
  
margin-left: 50px;
  &:hover {
    background: rgba(72, 100, 224, 1);
    color:white;
  }
  /* ${(props) =>
    props.inverted &&
    css`
      background: red;
      border: 2px solid white;

      &:hover {
        background: #3f2525;
        color: black;
      }
    `}; */
  /* & + button {
    
  } */
`;
const ChageTitle = styled.div`
font-size:15px;
display: flex;
align-items: center;
width: 80px;
height: 10px;
padding: 10px 2px;

`;
const Changemyinfo = () => {
  const user=[{id:"user"
,name:"홍길동",
nick:"테스트",
phone:"010-12**-56**",
email:"test@gmail.com"}]
  return (
    <>
      <ChangemyinfoCss>
        <div className="memo">
          <h3>개인정보 변경</h3>
          <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        </div>

        <InfoView>
          <ul>
            <li>
              <ChageTitle>ID </ChageTitle>
              <input type="text" value={user[0].id}></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
           
            </li>
            <li>
              <ChageTitle>이름 </ChageTitle>
              <input type="text" value={user[0].name}></input>
              <ChangnBtn changvalue={true}>개명</ChangnBtn>
             
            </li>
            <li>  
              <ChageTitle>닉네임    </ChageTitle>
              <input type="text" value={user[0].nick}></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
           
            </li>
            <li>
              <ChageTitle 번호>휴대폰 번호       </ChageTitle>
              <input type="text" value={user[0].phone}></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
       
            </li>
            <li>
              <ChageTitle>이메일      </ChageTitle>
                 <input type="text" value={user[0].email}></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
       
            </li>
          </ul>
        </InfoView>
      </ChangemyinfoCss>
    </>
  );
};

export default Changemyinfo;
