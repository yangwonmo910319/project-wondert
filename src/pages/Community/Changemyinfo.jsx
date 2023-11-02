/*원모 페이지 */
import styled, { css } from "styled-components";
const ChangemyinfoCss = styled.div`
  width: 100%;

  .memo {
    width: 100%;
    border-bottom: 5px solid rgba(73, 94, 87, 1);
    display: flex;
    p {
      margin-top: 20px;
      margin-left: 30px;
    }
  }
`;

const InfoView = styled.div`
  width: 50%;

  /* margin: 0 auto; */
  input {
    width: 70%;
    border: 3px solid rgba(73, 94, 87, 0.5);
  }
  li {
    padding: 5px;
    border-bottom: 3px solid rgba(73, 94, 87, 1);
  }
`;
const ChangnBtn = styled.button`
  float: right;
  &:hover {
    background: rgba(73, 94, 87, 1);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;

      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;
const ChageTitle = styled.div``;
const Changemyinfo = () => {
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
              <ChageTitle>회원 ID</ChageTitle>
              <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle>회원 ID</ChageTitle>
              <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle>닉네임 </ChageTitle>
              <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle 번호>휴대폰 번호</ChageTitle>{" "}
              <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
            <li>
              <ChageTitle>이메일</ChageTitle> <input type="text"></input>
              <ChangnBtn changvalue={true}>변경</ChangnBtn>
            </li>
          </ul>
        </InfoView>
      </ChangemyinfoCss>
    </>
  );
};

export default Changemyinfo;
