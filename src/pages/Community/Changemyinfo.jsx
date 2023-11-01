/*원모 페이지 */
import styled, { css } from "styled-components";
const ChangemyinfoCss = styled.div`
  color: red;
  border: 1px solid blue;
`;

const Changemyinfo = () => {
  return (
    <>
      <ChangemyinfoCss>
        <h3>개인정보 변경</h3>
        <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        <div>
          <ul>
            <li>회원 ID</li>
            <li>이름 </li>
            <li>닉네임 </li>
            <li>휴대폰 번호 </li>
            <li>이메일 </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {} <button onClick={""}> 변경</button>
            </li>
            <li>
              {} <button onClick={""}> 변경</button>
            </li>
            <li>
              {} <button onClick={""}> 더보기</button>
            </li>
            <li>
              {} <button onClick={""}> </button>
              <button onClick={""}> 삭제</button>
            </li>
            <li>
              {} <button onClick={""}> 변경</button>
            </li>
          </ul>
        </div>
      </ChangemyinfoCss>
    </>
  );
};

export default Changemyinfo;
