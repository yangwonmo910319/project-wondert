/*원모 페이지 */
import styled, { css } from "styled-components";
const CommunityFavoritesCss = styled.div`
  color: red;
`;
const CommunityFavorites = () => {
    return (
      <>

        <CommunityFavoritesCss>
          <p>즐겨찾기</p>
          <ul>
            <li>DIY 여행일지</li>
            <li>추천코스</li>
            <li>1인 전용 상품</li>    
          </ul>
        </CommunityFavoritesCss>
      </> 
    );
  };
  
  export default CommunityFavorites;
  