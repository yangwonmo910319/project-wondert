import React, { useState, useEffect } from "react";
import DiyAxiosApi from "../../api/DiyAxiosApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BoardContainer = styled.div`
  padding: 30px;
`;

const BoardUl = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const BoardLi = styled.li`
  background-color: #f2f2f2;
  margin: 10px 0;
  padding: 10px 14px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


const BoardTitle = styled.h2`
  font-size: 1.4em;
  color: #007bff;
  margin: 0 0 10px;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WriteButton = styled.button`
  width: 160px;
  margin-top: 20px;
  padding: 10px 15px;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #46a049;
  }
  &:active {
    background-color: #3e8e41;
  }
`;

const BoardUserId = styled.div`

`;

const BoardWriteDate = styled.div`

`;

const BoardView = styled.div`

`;

const BoardPic = styled.div`

`;

const BoardContainerWrapper = styled.div`

`;

function BoardList() {
  const [communityList, setCommunityList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const communityList = async () => {
      try {
        const rsp = await DiyAxiosApi.communityList();
        console.log(rsp.data);
        setCommunityList(rsp.data);
      } catch (error) {
        alert(error);
      } finally {
        alert("finally");
      }
    };
    communityList();
  }, []);

  // 글쓰기 버튼 클릭 시
  const handleWriteClick = () => {
    alert("onClickWrite");
    navigate("/DiyPage/DiyWrite");
  };

  // 글 상세보기 버튼 클릭
  const handleDetailClick = (travel_num) => {
    navigate(`/DiyPage/DiyWrite/${travel_num}`);
  };

  return (
    <BoardContainer>
      <BoardUl>
        {communityList &&
          communityList.map((board) => (
            <BoardLi 
            key={board.travel_num}
            onClick={() => handleDetailClick(board.travel_num)}>
            <BoardPic src={board.travel_pic ? board.travel_pic : ""} alt="img"/>
              <BoardContainerWrapper>
              <BoardHeader>
                <BoardTitle>{board.travel_title}</BoardTitle>
                <BoardUserId>{board.travel_userid}</BoardUserId>
                <BoardWriteDate>{board.travel_writedate}</BoardWriteDate>
                <BoardView>{board.travel_view}</BoardView>
              </BoardHeader>
              </BoardContainerWrapper>
            </BoardLi>
          ))}
      </BoardUl>
      <WriteButton onClick={handleWriteClick}>글쓰기</WriteButton>
    </BoardContainer>
  );
}

export default BoardList;