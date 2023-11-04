import React from "react-router-dom";
import styled from "styled-components";

const ListBanner = styled.div`
    padding: 0 90px;
    .banner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        font-weight: bold;
        margin: 25px 0;
    }
    li:nth-child(2) {
        display: flex;
        width: 500px;
        align-items: center;
        justify-content: center;
    }
`;

// 목록 글 배너
const ListName = () => {
    return (
        <ListBanner>
            <ul className="banner">
               <li>번호</li>
               <li>제목</li>
               <li>아이디</li>
               <li>작성일</li>
               <li>조회수</li>
            </ul>
        </ListBanner>
    ); 
};

export default ListName;