import React from "react-router-dom";
import styled from "styled-components";

const Diary1 = styled.div`
    margin: 20px 30px;
    float: left;
`;

const Diary = () => {
    return (
        <Diary1>
            <img src="https://cdn.travie.com/news/photo/first/201710/img_19975_1.jpg" width="350px" alt="지도사진" />
        </Diary1>
    );
};

export default Diary;