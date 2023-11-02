import React from "react";
import styled from "styled-components";

const CommSee = styled.div`
    margin: 0 30px;
    display: block;

    button {
       float: right;
    }
`;

const CommentSee = () => {
    return (
        <CommSee>
            <h3>댓글 보기</h3>
            <div>
                <div>아이디""</div> 
            </div>
            <div>
                <div>별점""</div>
                <div>작성 일자: ""</div>
            </div>
            <div>
                <div>내용넣기 </div>
            </div>
            {/* 더보기 토글 넣기 */}
            <button>목록</button>
            {/* 목록 누르면 뒤로 돌아가기(링크나 버튼으로 타고 들어가기) */}
        </CommSee>
    );
};

export default CommentSee;