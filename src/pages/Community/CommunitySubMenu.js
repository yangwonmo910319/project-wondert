/*원모 페이지 */
import styled, { css } from "styled-components";
import { Link, Outlet } from "react-router-dom";
const CommunitySubMenuvar = styled.div`
  width: 100%;
  height: auto;
  margin-top: 100px;
  padding: 0;
  display: flex;
  color: black;
  li {
    list-style: none;
  }
`;
const SubMenuvar = styled.div`
height: auto;
  margin-top: 46px;
  width: 300px;
  a {
    text-decoration: none;
    color: black;
  }
  p {
    border-bottom: 5px solid rgba(73, 94, 87, 1);
    font-size: 1.5em;
  }
  li {
    border-bottom: 3px solid rgba(73, 94, 87, 1);
  }
`;
const SubMenuContent = styled.div`
  margin-left: 15%;
  height: auto;
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
              <Link to="/Community/myinfo/CommunitySubMenu/Changemyinfo">
                개인정보 확인&변경
              </Link>
            </li>
            <li>
              <Link to="/Community/myinfo/CommunitySubMenu/ChangePwd">
                비밀번호 변경
              </Link>
            </li>
            <li>
               <Link to="/Community/myinfo/CommunitySubMenu/Userout">회원탈퇴</Link>
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
