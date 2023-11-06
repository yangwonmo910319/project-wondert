import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../api/AxiosApi";
import styled from "styled-components";

const FormContainer = styled.div.attrs({
    className : "form-container",
})`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const FieldContainer = styled.div.attrs({
    className: "field-container",
})`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

const StyledLabel = styled.label`
  font-size: 15px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 25px;
  font-weight: bold;
  margin: 15px;
`;

const StyledForm = styled.form.attrs({
    className : "styled-form",
})`
  display: flex;
  padding: 0;
  margin: 0;
  flex-direction: column;
`;

const StyledInput = styled.input.attrs({
    className : "styled-input",
})`
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px; // 입력창 아래에 여백 추가
`;

const StyledTextarea = styled.textarea`
  width: 90%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #666;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
`;

const WriteForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const userId = window.localStorage.getItem("userId");
  const [isOtherTravelEnabled, setisOtherTravelEnabled] = useState(false);
  const handleRadioClick = () => {
    setisOtherTravelEnabled(!isOtherTravelEnabled); // 라디오 버튼 클릭 시 isChecked 상태를 토글합니다.
  };
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content);
    try {
      const rsp = await AxiosApi.boardWrite(title, content, userId);
      console.log("게시글 등록 결과 : " + rsp.data);
      if (rsp.data === true) {
        alert("글쓰기 성공");
        navigate("/Boards");
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <Title>여행 후기 작성</Title>
      <StyledForm onSubmit={handleSubmit}>

        <FieldContainer className="select">
            <StyledLabel htmlFor="title">국내/해외 선택</StyledLabel>
            <StyledInput 
                type="radio"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
            />
            <StyledLabel htmlFor="title">국내</StyledLabel>
            <StyledInput
                type="radio"
                id="title"
                name="title"
                value={title}
                onChange={handleTitleChange}
            />
            <StyledLabel htmlFor="title">해외</StyledLabel>
            </FieldContainer>

        <FieldContainer>
        <StyledLabel htmlFor="title">국내지역 선택</StyledLabel>
        <StyledInput
                type="radio"
                id="koreaJeju"
                name="korea"
                value={title}
                onChange={handleRadioClick}
            /><StyledLabel htmlFor="title">제주도</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaGangwondo"
                name="korea"
                value={title}
                onChange={ handleRadioClick(false)}
            /><StyledLabel htmlFor="title">강원도</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaDaejeon"
                name="korea"
                value={title}
                onChange={handleRadioClick(false)}
            /><StyledLabel htmlFor="title">대전</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaUlleungdo"
                name="korea"
                value={title}
                onChange={handleRadioClick(false)}
            /><StyledLabel htmlFor="title">울릉도</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaBusan"
                name="korea"
                value={title}
                onChange={handleRadioClick(false)}
            /><StyledLabel htmlFor="title">부산</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaYeosu"
                name="korea"
                value={title}
                onChange={handleRadioClick(false)}
            /><StyledLabel htmlFor="title">여수</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaJeonju"
                name="korea"
                value={title}
                onChange={handleRadioClick(false)}
            /><StyledLabel htmlFor="title">전주</StyledLabel>
            <StyledInput
                type="radio"
                id="koreaOther"
                name="korea"
                value={title}
                onChange={handleRadioClick(false)}
            /><StyledLabel htmlFor="title">기타</StyledLabel>
            <StyledInput 
            type="text" 
            id="koreaAd"
            name="korea"
            value={title}
            onChange={handleRadioClick(false)}
            disabled= {!isOtherTravelEnabled}/>
        </FieldContainer>     

         <FieldContainer>
            <StyledLabel htmlFor="title">해외지역 선택</StyledLabel>
            <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">일본</StyledLabel>
            <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">미국</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">인도</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">중국</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">태국</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">베트남</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">필리핀</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">대만</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleTitleChange}
                /><StyledLabel htmlFor="title">호주</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">싱가폴</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">코타키나발루</StyledLabel>
                <StyledInput
                    type="radio"
                    id="world"
                    name="world"
                    value={title}
                    onChange={handleRadioClick}
                /><StyledLabel htmlFor="title">기타지역</StyledLabel>
                <StyledInput 
                type="text"
                id="world"
                name="world"
                value={title}
                onChange={handleTitleChange}
                disabled={!isOtherTravelEnabled} />
        </FieldContainer>   

        <FieldContainer>
        <StyledLabel htmlFor="title">테마 선택하기</StyledLabel>
          <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">자유여행</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">백패킹</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">틈새여행</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">겨울여행</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">먹방여행</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">프리미엄여행</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">지금뜨는그곳</StyledLabel>
            <StyledInput
            type="radio"
            id="theme"
            value={title}
            onChange={handleRadioClick}/>
            <StyledLabel htmlFor="title">기타여행</StyledLabel>
            <StyledInput
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
            disabled={!isOtherTravelEnabled}
            />
        </FieldContainer>
            

        <FieldContainer>
        <StyledLabel htmlFor="title">제목</StyledLabel>
          <StyledInput
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}/>
        </FieldContainer>

        <FieldContainer>
          <StyledLabel htmlFor="content">내용</StyledLabel>
          <StyledTextarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
          />
        </FieldContainer>

        <ButtonContainer>
          <SubmitButton type="submit">글쓰기</SubmitButton>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};

export default WriteForm;