import React from "react";
import styled from "styled-components";


const CommentTable = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

const Comments = () => {

    return(
        <CommentTable>
            <div className="map">
                지도
            </div>

            <div className="cos_wrap">
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 1" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 2" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 3" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 4" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 5" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 6" />
                <img src="https://www.kagoshima-kankou.com/storage/tourism_themes/12/responsive_images/ElwnvZ2u5uZda7Pjcwlk4mMtr08kLNydT8zXA6Ie__1673_1115.jpeg" alt="코스 7" />
            </div>

            <div className="tab_wrap">
                 {/* props */}
                    <textarea placeholder="후기 글 작성란"></textarea>
            </div>
        </CommentTable>
    );
};

export default Comments;