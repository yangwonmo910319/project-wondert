import React from "react";
import styled from "styled-components";

const Date = styled.div`
    display: block;
    margin: 0 30px;
    
    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        border:2px solid black;
    }
`;

const Calender = () => {
    return (
        <Date>
            <h3>2. 여행 날짜 선택하기</h3>
            <h1>달력 나오게 하기</h1>
        </Date>
    );
};

export default Calender;