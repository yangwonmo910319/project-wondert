import { Link } from "react-router-dom";
import styled from "styled-components";

const Boxes = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const PhotoBoxes = () => {
    return (
        <Boxes>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="200px" alt="사진 1"/>
                <div>강원도 바다에서 석양이 지는 모습</div>
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="200px" alt="사진 1"/>
                <div>강원도 바다에서 석양이 지는 모습</div>
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="200px" alt="사진 1"/>
                <div>강원도 바다에서 석양이 지는 모습</div>
            </div>
            <div>
                <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="200px" alt="사진 1"/>
                <div>강원도 바다에서 석양이 지는 모습</div>
            </div>
        </Boxes>
    );
};

export default PhotoBoxes;