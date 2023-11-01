/*원모 페이지 */
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
const CommunitySubMenuvar = styled.div`

margin-top: 100px;
height: 150px;
width: 260px;
color: white;
  & ul {
list-style: none;
}
& li{
  
  color: black;
  border-bottom:3px solid rgba( 73,94,87,1);
  margin-left: -35px;
  margin-top: 10px;

}
`;
const SubMenuvarP = styled.p`
margin: 10px ;
color: black;
font-size: 1.5em;
border-bottom:3px solid rgba( 73,94,87,1);
`;
const CommunitySubMenu = () => {
    return (
      <>

        <CommunitySubMenuvar>
          <SubMenuvarP>내정보관리</SubMenuvarP>
          ChangePwd
          <ul>
            <li><Link to="/Community/myinfo/Changemyinfo">개인정보 확인&변경</Link></li>
            <li><Link to="/Community/myinfo/ChangePwd">비밀번호 변경</Link></li>
            <li>회원탈퇴</li>    
          </ul>
        </CommunitySubMenuvar>
      </> 
    );
  };
  
  export default CommunitySubMenu;
  