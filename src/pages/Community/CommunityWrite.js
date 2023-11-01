/*원모 페이지 */
import styled, { css } from "styled-components";
const CommunityWriteCss = styled.div`
  background-color: red;

  width: 1200px;
  height: 500px;
  & div{
    display: inline-block;
  }
`;
const CommunityWriteCss1 = styled.div`
  width: 50%;
  height: 50%;
  background: blue;
`;
const CommunityWriteCss2 = styled.div`
  width: 50%;
  height: 50%;
  background: brown;
`;
const CommunityWriteCss3 = styled.div`
  width: 100%;
  height: 50%;
  background: yellow;
`;







const CommunityWrite = () => {
    return (
      <>

        <CommunityWriteCss>
   <CommunityWriteCss1>1</CommunityWriteCss1>
   <CommunityWriteCss2>2</CommunityWriteCss2>
   <CommunityWriteCss3>3</CommunityWriteCss3>
        </CommunityWriteCss>
      </>
    );
  };
  
  export default CommunityWrite;
  