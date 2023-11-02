import React from "react";
import styled from "styled-components";

const Buttones = styled.div`
    border: 2px solid black;
    margin: 0 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    button {
        border-radius: 10px;
    }
`; 

const FavorSelect = () => {
    return (
        <Buttones>
        <button>겨울 여행</button>
        <button>틈새 여행</button>
        <button>자유 여행</button>
        <button>지금 뜨는 그곳</button>
        <button>프리미엄</button>
        <button>백패킹</button>
        <button>먹방 여행</button>
        <button>기타 여행</button>  {/* 기타여행 치면 화면에 나올수 있게 하기 */}
        </Buttones>
    );
};

export default FavorSelect;