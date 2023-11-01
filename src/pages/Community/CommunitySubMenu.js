/*원모 페이지 */
import styled, { css } from "styled-components";
const CommunitySubMenuvar = styled.div`
  color: red;
`;
const CommunitySubMenu = () => {
    return (
      <>

        <CommunitySubMenuvar>
          <p>내정보관리</p>
          <ul>
            <li>개인정보 확인&변경</li>
            <li>비밀번호 변경</li>
            <li>회원탈퇴</li>    
          </ul>
        </CommunitySubMenuvar>
      </> 
    );
  };
  
  export default CommunitySubMenu;
  