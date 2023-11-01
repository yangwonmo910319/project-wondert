/*원모 페이지 */
import styled, { css } from "styled-components";
const ChangeCQCss = styled.div`
  color: red;
  border: 1px solid blue;
  background-color: 110px;
`;
const Box = styled.div`
  width: 150px;
  height: 300px;
  background-color: pink;
`;
const ChangeCQ = () => {
  return (
    <>
      <ChangeCQCss>
        <h3>비번입력</h3>
      </ChangeCQCss>
    </>
  );
};

export default ChangeCQ;
