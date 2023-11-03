import styled, { css } from "styled-components";

const FavorCourseCss = styled.button`
  color: red;
`;
const FavorCourse = () => {
  return (
    <>
      <FavorCourseCss>
        <h1>상품 즐겨찾기</h1>
      </FavorCourseCss>
    </>
  );
};

export default FavorCourse;
