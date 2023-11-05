/*원모 페이지 */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const CommunityMenuvar = styled.div`
  background:rgba(72, 100, 224, 1);
  height: 35px;
  color: white;
  margin-top: 100px;
min-width: 700px;
  a {
    text-decoration: none;
    color: white;
  }
  li {
    width: 80px;
    border-right:rgba(255, 255, 255, 0.2) 2px solid;
    border-left:rgba(255, 255, 255, 0.2) 2px solid;
    display: inline-block;
    margin: 8px 20px;
    color: white;
    text-decoration-line: none;
    text-align:center
  }
`;
const CommunityMenu = () => {
  return (
    <>
      <CommunityMenuvar>
        <ul>
          <li>
            <Link to="/myinfo/CommunitySubMenu/Changemyinfo">
              정보 수정
            </Link>
          </li>
          <li>
            <Link to="/myinfo/CommunityFavorites/FavorDiy">즐겨찾기</Link>
          </li>
          <li>장바구니</li>
          {/* <li>히스토리</li> */}
        </ul>
      </CommunityMenuvar>
    </>
  );
};

export default CommunityMenu;
