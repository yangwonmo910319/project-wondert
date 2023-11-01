/*원모 페이지 */
import styled, { css } from "styled-components";
const ChangepwdCss = styled.div`
  color: red;
  border: 1px solid blue;
  background-color: 110px;
`;
const Box = styled.div`
  width: 150px;
  height: 300px;
  background-color: pink;
`;
const ChangePwd = () => {
  return (
    <>
      <ChangepwdCss>
        <h3>개인정보 변경</h3>
        <p>고객님의 개인정보보호를 위해 최선을 다하겠습니다.</p>
        <div>
          <ul>
            <li>기존 비밀번호 입력</li>
            <input type="text" name=" " />
            <li>새 비밀번호 입력 </li>
            <input type="text" name=" " />
            <li>새 비밀번호 재입력 </li>
            <input type="text" name=" " />
          </ul>
        </div>
      </ChangepwdCss>
    </>
  );
};

export default ChangePwd;
