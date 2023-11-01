/*원모 페이지 */
import styled, { css } from "styled-components";
const CommunityMenuvar = styled.div`
  color: red;
`;
const CommunityMenu = () => {
    return (
      <>

        <CommunityMenuvar>
          <ul>
            <li>정보 수정</li>
            <li>장바구니</li>
            <li>즐겨찾기</li>
            <li>히스토리</li>
          </ul>
        </CommunityMenuvar>
      </>
    );
  };
  
  export default CommunityMenu;
  