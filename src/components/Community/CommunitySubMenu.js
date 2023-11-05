/*원모 페이지 */
import styled, { css } from "styled-components";
import { Link, Outlet } from "react-router-dom";
const CommunitySubMenuvar = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  margin-left: 40px;

  padding: 10px;
  display: flex;
  color: black;
  
  li {
    list-style: none;
  }
`;
const SubMenuvar = styled.div`
  height: 600px;
  
  margin-top: 46px;
  width: 250px;
  a {
    text-decoration: none;
    color: black;
  }
  p {
    border-bottom: 5px solid rgba(72, 100, 224, 1);
    font-size: 25px;
  }  
  li {
    font-size: 15px;
    margin-top: 15px;
    border-bottom: 3px solid rgba(72, 100, 224, 0);
  }
`;
const SubMenuContent = styled.div`
  margin-left: 15%;
  height: 100%;
  width: 100%;
  color: black;
  
`;
const CommunitySubMenu = () => {
  return (
    <>
      <CommunitySubMenuvar>
        <SubMenuvar>
          <ul>
            <p>내정보관리</p>
            <li>
              <Link to="/myinfo/CommunitySubMenu/Changemyinfo">
                개인정보 확인&변경
              </Link>
            </li>
            <li>
              <Link to="/myinfo/CommunitySubMenu/ChangePwd">
                비밀번호 변경
              </Link>
            </li>
            <li>
               <Link to="/myinfo/CommunitySubMenu/Userout">회원탈퇴</Link>
               </li>
          </ul>
        </SubMenuvar>
        <SubMenuContent>
          <Outlet />
        </SubMenuContent>
      </CommunitySubMenuvar>
    </>
  );
};

export default CommunitySubMenu;
