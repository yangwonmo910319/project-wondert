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
  width: 500px;
 margin-top: 50px;

  /* margin: 0 auto; */
  input {
    width:auto; 
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
    width:100%;
    border-top: 0.5px solid #b3b3b3;
  
   
  }
  
`;
const ChangnBtn = styled.button`
  
margin-left: 120px;
  &:hover {
    background:  rgba(72, 100, 224, 1);
   color:white;
  }

`;

const ChageTitle = styled.div`
font-size:15px;
display: flex;
flex-wrap: nowrap;
align-items: center;
width: 150px;
height: 10px;
padding: 10px 2px;

`;
const ChangePwd = () => {
  return (
    <>
      <ChangemyinfoCss>
        <div className="memo">
          <h3>비밀번호 변경</h3>
          <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        </div>
        <InfoView>
          <ul>
            <li>
              <ChageTitle>기존 비밀번호</ChageTitle>
              <input type="password"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle>새 비밀번호</ChageTitle>
              <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle>새 비밀번호 재입력 </ChageTitle>
              <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
          </ul>
        </InfoView>
      </ChangemyinfoCss>
    </>
  );
};

export default ChangePwd;
