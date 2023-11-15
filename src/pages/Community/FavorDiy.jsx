import styled, { css } from "styled-components";

const FavorDiyCss = styled.button`
  color: red;
  height:100px;
`;
const FavorDiy = () => {
  return (
    <>
      <FavorDiyCss>
        <h1>Diy 즐겨찾기</h1>
      </FavorDiyCss>
    </>
  );
};

export default FavorDiy;
