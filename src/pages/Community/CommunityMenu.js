/*원모 페이지 */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const CommunityMenuvar = styled.div`
  background: rgba(73, 94, 87, 1);
  height: 35px;
  color: white;
  margin: 0;
  padding: 0;
  a {
    text-decoration: none;
    color: white;
  }
  li {
    display: inline-block;
    margin: 8px 20px;
    color: white;
    text-decoration-line: none;
  }
`;
const CommunityMenu = () => {
  return (
    <>
      <CommunityMenuvar>
        <ul>
          <li>
            <Link to="/Community/myinfo/CommunitySubMenu/Changemyinfo">
              정보 수정
            </Link>
          </li>
          <li>
            <Link to="/Community/myinfo/CommunityFavorites/FavorDiy">즐겨찾기</Link>
          </li>
          <li>장바구니</li>
          {/* <li>히스토리</li> */}
        </ul>
      </CommunityMenuvar>
    </>
  );
};

export default CommunityMenu;
