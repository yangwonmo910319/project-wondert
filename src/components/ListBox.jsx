import React from "react";
import styled from "styled-components";

const Box = styled.div`
    border: 1px solid black;
    height: 50px;
    border-radius: 5px;
    padding: 10px 60px;
    margin: 10px 30px;
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }

    .box-txt {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 50px;
        list-style: none;
    }
    li:nth-child(2) {
        display: flex;
        width: 500px;
        margin: 0;
        align-items: center;
        justify-content: center;
    }
`;

const ListBox = () => {
    return (
        <Box>
            <ul className="box-txt"> 
                {/* 데이터 가져올 수 있게 {prop}사용, 링크타고 갈 수 잇게 하기 */}
                <li>번호</li>
                <li>제목</li>
                <li>아이디</li>
                <li>작성일</li>
                <li>조회수</li>
            </ul>
        </Box>
    );
};

export default ListBox;