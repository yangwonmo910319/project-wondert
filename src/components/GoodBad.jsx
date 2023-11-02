import React from "react";
import styled from "styled-components";

const Imoge2 = styled.div` // 공간 여백 보기
    margin: 0 30px;
    display: block;
    text-align: end;

    button {
        margin: 10px 10px;
    }
`;

const Imoge = () => {
    return (
        <Imoge2>
            <button>좋아요""</button>
            <button>싫어요""</button>
            <button>즐겨찾기""</button>
            <button>조회수""</button>
        </Imoge2>
    );
};
export default Imoge;