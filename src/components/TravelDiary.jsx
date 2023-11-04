import React from "react-router-dom";
import styled from "styled-components";

const Diary1 = styled.div`
    margin: 50px 100px;
    display: grid;
    grid-template-columns: repeat(2,1fr);

    div:nth-child(3) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 350px;
        line-height: 50px;
    }
    div:nth-child(4) input{
        width: 350px;
        height: 200px;
    }
`;

const Diary = () => {
    return (
        <Diary1>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="350px" alt="지도사진" />
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="350px" alt="여행 후기 사진" />
            </div>
            <div>
                Day-"" : {/* usemeno사용하기 */}
                <input type="text" placeholder="일정 작성란"/>
            </div>
            <div>
                <input type="text" placeholder="후기 글 작성란입니다 :)"/>
            </div>
        </Diary1>
    );
};

export default Diary;