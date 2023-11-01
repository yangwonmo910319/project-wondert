/*원모 페이지 */
import styled, { css } from "styled-components";
const CommunityFavoritesItemCss = styled.div`
  color: red;
  & ul{


  }
  & li{
    width: 200px;
    height: 150px;
    background-color: skyblue;
  }
`;

const CommunityFavoritesItem = () => {
    return (
      <>

        <CommunityFavoritesItemCss>
          <p>DIY 여행일지</p>
          <ul>
            <li><div>사진</div><div>글</div></li>      
          </ul>
          <p>추천 코스</p>
          <ul>
            <li><div>사진</div><div>글</div></li>      
          </ul>
        </CommunityFavoritesItemCss>
      </> 
    );
  };
  
  export default CommunityFavoritesItem;
  