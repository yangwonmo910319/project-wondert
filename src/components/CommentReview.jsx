import React from "react";
import styled from "styled-components";

const Review = styled.div`
    margin: 0 30px;
    clear: both;
    display: flex;
    flex-direction: row;

    button {
        margin-left: 30px;
    }
`;

const ReviewSee = () => {
    return (
        <Review>
            <div>후기글 000명</div>
            <button>목록 드롭바 만들기</button>
        </Review>
    );
};

export default ReviewSee;