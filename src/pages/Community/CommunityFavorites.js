/*원모 페이지 */
import styled, { css } from "styled-components";
import { Link, Outlet } from "react-router-dom";
const CommunitySubMenuvar = styled.div`
  width: 100%;
  height: 1000px;
  margin-top: 100px;
  padding: 0;
  display: flex;
  color: black;
  li {
    list-style: none;
  }
`;
const SubMenuvar = styled.div`
  height: 600px;
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
  height: 100%;
  width: 100%;
  color: black;
`;
const CommunityFavorites = () => {
    return (
         <>    
      <CommunitySubMenuvar>
        <SubMenuvar>
          <ul>
            <p>즐겨찾기</p>
            <li>
              <Link to="/Community/myinfo/CommunityFavorites/FavorDiy">
              DIY 여행일지
              </Link>
            </li>
            <li>
              <Link to="/Community/myinfo/CommunityFavorites/FavorCourse">
              추천코스
              </Link>
            </li>
            <li>   <Link to="/Community/myinfo/CommunityFavorites/FavorGoods">1인 전용 상품</Link></li>
          </ul>
        </SubMenuvar>
        <SubMenuContent>
          <Outlet />
        </SubMenuContent>
      </CommunitySubMenuvar>
    </>
    );
  };
  
  export default CommunityFavorites;
  