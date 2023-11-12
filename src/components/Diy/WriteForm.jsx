import React, { useState } from "react";
import styled from "styled-components";
import MyCalendar from "./Calendar";
import PicForm from "./PicForm";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
  border-radius: 10px;
  margin: 60px 60px;
  padding: 80px 100px;

  h2{
    font-size: 50px;
    font-weight: bold;
    margin: 20px 40px;
    display: flex;
    justify-content: center;
    padding-bottom: 35px;
  }
`;

const FieldContainer = styled.div`

    display: ${(props) =>(props.radio ? "none" : "")};
    
    p {
      font-size: 17px;
      font-weight: bold;
      margin: 0 40px;
    }
    div {
      margin: 20px 40px;
      line-height: 30px;
    }
    input {
      margin: 0 15px;
    }
`;

const SubmitButton = styled.div`
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #21c962;
      border-radius: 5px;
      padding: 20px 60px;
      font-size: 20px;
      color: white;
      font-weight: bold;
`;


const WriteForm = () => {
    const [radio,setRadio]=useState(false);
    const onChangeRadio = () => {
      setRadio(true);
    };
    const onChangeRadio1 = () => {
      setRadio(false);
    };
    const [disable,setDisable]=useState(true);

    const onChangedisable = () => {
      setDisable(false);
    };
    const onChangedisable1 = () => {
      setDisable(true);
    };

    // const navigate = useNavigate();
    // const handleReset = () => {
    //   navigate("/DiyPage");
    // };

  return (
    <>
    <FormContainer>
      <h2>여행 후기 글쓰기</h2>
        <FieldContainer>
          <p>[ 1. 여행 나라 선택 ]</p>
            <div>
              <input type="radio" id="world" name="world" onChange={onChangeRadio1} radio={radio}/>
              <label htmlFor="world">국내</label>
              <input type="radio" id="world" name="world" onChange={onChangeRadio} radio={!radio}/>
              <label htmlFor="world">해외</label>
            </div>
        </FieldContainer>

      <FieldContainer radio={radio}>
        <p>[ 국내 지역 ]</p>
        <div >
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">제주도</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">강원도</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">울릉도</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">경주</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">여수</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">전주</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable1}/>
          <label htmlFor="korea">대전</label>
          <input type="radio" name="korea" id="korea" onChange={onChangedisable}/>
          <label htmlFor="text">기타</label>
          <input type="text" name="text" id="text" placeholder="직접입력" disabled={disable}/>
        </div>
      </FieldContainer>

      <FieldContainer radio={!radio}>
        <p>[ 해외 지역 ]</p>
        <div >
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">일본</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">미국</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">인도</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">필리핀</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">태국</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">코타키나발루</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">대만</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">중국</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">호주</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">베트남</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable1}/>
          <label htmlFor="overseas">싱가폴</label>
          <input type="radio" name="overseas" id="overseas" onChange={onChangedisable}/>
          <label htmlFor="text">기타</label>
          <input type="text" name="text" id="text" placeholder="직접입력" disabled={disable} />
        </div>
      </FieldContainer>

      <FieldContainer>
        <p>[ 2.여행 날짜 정하기 ]</p>
        <div>
          <MyCalendar />
        </div>
      </FieldContainer>

      <FieldContainer>
          <p>[ 3. 여행 테마 정하기 ]</p>
          <div>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#자유여행</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#지금뜨는그곳</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#틈새여행</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#먹방여행</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#백패킹</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#프리미엄</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable1}/>
          <label htmlFor="diary">#겨울여행</label>
          <input type="radio" name="diary" id="diary" onChange={onChangedisable}/>
          <label htmlFor="diary">#기타여행</label>
          <input type="text" name="text" id="text" placeholder="직접입력" disabled={disable}/>
          </div>
      </FieldContainer>

      {/* <FieldContainer>
        <SubmitButton onClick={handleReset}>작성완료</SubmitButton>
      </FieldContainer> */}
    </FormContainer>
    </>
  );
};

export default WriteForm;