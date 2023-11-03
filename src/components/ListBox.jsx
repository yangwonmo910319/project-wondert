import React from "react";
import styled from "styled-components";

const Box = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 0 60px;
    margin: 0 30px;

    .box-txt {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
                {/* 데이터 가져올 수 있게 {prop}사용 */}
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