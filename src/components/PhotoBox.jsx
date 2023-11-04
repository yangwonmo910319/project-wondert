
import styled from "styled-components";
import { Link } from "react-router-dom";


const Boxes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    div {
        margin: 10px 10px;
        cursor: pointer;

        &:hover{
            font-weight: bold;
            }
    }

`;

// 마우스 선택 시 선택 게시판으로 이동할 수 있는 게시글 포토박스 
const PhotoBoxes = () => { // 링크 커서 넣기!!!! -> 그 페이지로 이동 할 수 있게
    return (
        <Boxes>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="210px" alt="사진 1"/>
                <p>강원도 바다에서 석양이 지는 모습</p>
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="210px" alt="사진 1"/>
                <p>강원도 바다에서 석양이 지는 모습</p>
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="210px" alt="사진 1"/>
                <p>강원도 바다에서 석양이 지는 모습</p>
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="210px" alt="사진 1"/>
                <p>강원도 바다에서 석양이 지는 모습</p>
            </div>
        </Boxes>
    );
};

export default PhotoBoxes;

