import React from "react";
import styled from "styled-components";


const CommentTable = styled.div`
    
    div {
        box-sizing: border-box;
    }
    .map {
        border: 1px solid black;
        width: 900px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cos_wrap {
        position: relative;
        width: 900px;
        height: 100px;
        background-color: #f3f2f2;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .cos_wrap img {
        width: 100px;
        margin: 0 10px;
        cursor: pointer;
    }
    .cos_wrap img:hover {
        width: 110px;
    }
    .tab_wrap {
        background-color: #bbacac;
        display: flex;
        justify-content: end;
        width: 900px;
        height: 200px;
    }
`;
const TravelTitle = styled.div`
    padding: 0 30px;

    p {
      margin: 20px 15px;
      line-height: 30px;
    }
    h5 {
      font-size: 17px;
      font-weight: bold;
      margin: 10px 300px;
    }
    ul {
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 20px 40px; 
    }
    li {
        font-size: 12px;
        list-style: circle;
        line-height: 40px;
    }
    h3 {
    font-weight: bold;
    margin: 10px 0;
    }
`;


const Comments = () => {

    return(
        <CommentTable>
            <TravelTitle>
                <p>
                <h5>[4. 여행 후기 글 작성하기]</h5>
                        <ul>
                        <h3>〈내 여행 정보〉</h3>
                            <li>나라 : 국내/해외</li>
                            <li>지역 : 국내지역/해외지역</li>
                            <li>여행 날짜 : 2023/11/01 ~ 2023/11/05</li>
                            <li>여행 테마 : #먹방여행</li>
                        </ul>
                </p>
    
            </TravelTitle>

            <div className="map">
                지도
            </div>

            <div className="cos_wrap"> {/* 코스 1,2,3,4 넣기? */}
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 1" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 2" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 3" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 4" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 5" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 6" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 7" />
            </div>

            <div className="tab_wrap">
                 {/* props 사용 / 일정 후기 사진 하나씩 크게 나오게*/}
                    <textarea placeholder="후기 글 작성란"></textarea>
            </div>
        </CommentTable>
    );
};

export default Comments;