import React from "react";
import styled from "styled-components";

const See2 = styled.div`
    clear: both;
    margin: 50px 30px;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TravelWriteTitle = () => {
    return (
        <See2>
            <h2>여행일지 작성글 쓰기</h2>
        </See2>
    );
};

export default TravelWriteTitle;