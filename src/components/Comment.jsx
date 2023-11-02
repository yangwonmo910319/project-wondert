import React from "react";
import styled from "styled-components";

const CommWrite = styled.div`
    margin: 0 30px;
    clear: both;
    line-height: 30px;

    input {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 815px;
        height: 100px;
    }
    button {
        float: right;
        margin-top: 10px;
    }
`;

const CommentWrite = () => {
    return (
        <CommWrite>
            <h3>댓글 쓰기</h3>
            <input type="text" placeholder="댓글 쓰기란"/>
            <button>작성 완료</button>
        </CommWrite>
    );
};

export default CommentWrite;