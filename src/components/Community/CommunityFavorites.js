/*원모 페이지 */
import styled, { css } from "styled-components";
import { Link, Outlet } from "react-router-dom";
const CommunitySubMenuvar = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  margin-left: 50px;

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
const CommunityFavorites = () => {
    return (
         <>    
      <CommunitySubMenuvar>
        <SubMenuvar>
          <ul>
            <p>즐겨찾기</p>
            <li>
              <Link to="/myinfo/CommunityFavorites/FavorDiy">
              DIY 여행일지
              </Link>
            </li>
            <li>
              <Link to="/myinfo/CommunityFavorites/FavorCourse">
              추천코스
              </Link>
            </li>
            <li>   <Link to="/myinfo/CommunityFavorites/FavorGoods">1인 전용 상품</Link></li>
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
  