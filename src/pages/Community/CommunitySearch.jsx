/*원모 페이지 */
import styled, { css } from "styled-components";
import ChangeButton from "./ChangeButton";
const CommunitySearchCss = styled.div`
  color: red;
`;
const SearchCss = styled.div`
  color: blue;
`;
const CommunitySearch = () => {
  return (
    <>
      <input type="text" onChange={() => {}}></input>
      <ChangeButton></ChangeButton>
      <CommunitySearchCss>
        <SearchCss></SearchCss>
      </CommunitySearchCss>
    </>
  );
};

export default CommunitySearch;
