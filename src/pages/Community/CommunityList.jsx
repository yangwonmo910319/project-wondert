/*원모 페이지 */
import styled, { css } from "styled-components";
const CommunityListCss = styled.div`
  color: red;
`;

const CommunityList = () => {
  return (
    <>
      <CommunityListCss>
        <p>자유게시판</p>
        <ul>
          <li>유형 </li>
          <li>제목 </li>
          <li>글쓴이 </li>
          <li>등록일 </li>
          <li>조회수 </li>
        </ul>
      </CommunityListCss>
    </>
  );
};

export default CommunityList;
