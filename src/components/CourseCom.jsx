import styled from "styled-components";
import React from "react";
// 가장 큰박스
const ComBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
  height: 474px;
  border: 1px solid #45474b;
  border-radius: 10px;
`;
// 댓글 쓰는 박스
const CommRB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1150px;
  margin: 5px;
`;
// 입력&버튼 묶는 박스
const SearchB = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 700px;
  height: 50px;
`;
// 댓글 보는 박스
const CommSB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1150px;
  height: 370px;
  border: 1px solid #45474b;
  margin: 5px;
  border-radius: 10px;
`;
// 댓글 상단바&댓글 내용 박스
const CommS = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .commST {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10%;
    width: 100%;

    .id {
      display: flex;
      justify-content: center;
      flex-grow: 1;
    }
    .com {
      display: flex;
      justify-content: center;
      flex-grow: 2;
    }
    .day {
      display: flex;
      justify-content: center;
      flex-grow: 1;
    }
  }
  .commSBB {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 100%;
    flex-direction: column;
  }
`;
const CommSBT = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 10px;
  .id {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
  .com {
    display: flex;
    justify-content: center;
    flex-grow: 2;
  }
  .day {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
`;

const CourseCom = () => {
  return (
    // 가장 큰박스
    <ComBox>
      <CommRB>
        <SearchB>
          <input
            type="text"
            placeholder="댓글을 써주세요."
            style={{
              fontSize: "25px",
              color: "black",
            }}
          ></input>
          <button
            style={{
              fontSize: "25px",
              color: "black",
            }}
          >
            댓글
          </button>
        </SearchB>
      </CommRB>
      <CommSB>
        <CommS>
          <div className="commST">
            <div className="id">아이디</div>
            <div className="com">댓글내용</div>
            <div className="day">작성일자</div>
          </div>
          <div className="commSBB">
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
            <CommSBT>
              <div className="id">아이디</div>
              <div className="com">댓글내용</div>
              <div className="day">작성일자</div>
            </CommSBT>
          </div>
        </CommS>
      </CommSB>
    </ComBox>
  );
};
export default CourseCom;
