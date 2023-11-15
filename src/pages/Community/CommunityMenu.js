/*원모 페이지 */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
const CommunityMenuvar = styled.div`
  background: #F4CE14;
  height: auto;
  margin-top: 100px;
min-width: 700px;

  a {
    color: black;
    text-decoration: none;
  }
  li {
    width: 80px;
    border-right:black 2px solid;
    border-left:black 2px solid;
    display: inline-block;
    margin: 8px 20px;
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
      
          {/* <li>히스토리</li> */}
        </ul>
      </CommunityMenuvar>
    </>
  );
};

export default CommunityMenu;
