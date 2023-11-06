import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  border: 1px solid lightgray;
  box-shadow: 0 0 5px lightgray;
  border-radius: 10px;
  margin: 0 50px;

  h2{
    font-size: 30px;
    font-weight: bold;
    margin: 30px 40px;
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
    ul {
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 20px 40px;
    }
    li {
      font-size: 12px;
      list-style: circle;
      line-height: 40px;
    }
    h3 {
    font-weight: bold;
    margin: 10px 20px;
  }
`;


const WriteForm = () => {
    const [radio,setRadio]=useState(false);
    const onChangeRadio = () => {
      setRadio(true);
    };
    const onChangeRadio1 = () => {
      setRadio(false);
    };

  return (
    <>
    <FormContainer>
      <h2>게시물 쓰기</h2>
        <FieldContainer>
          <p>[1. 여행 나라 선택]</p>
            <div>
              <input type="radio" id="world" name="world" onChange={onChangeRadio1} radio={radio}/>
              <label htmlFor="world">국내</label>
              <input type="radio" id="world" name="world" onChange={onChangeRadio} radio={!radio}/>
              <label htmlFor="world">해외</label>
            </div>
        </FieldContainer>

      <FieldContainer radio={radio}>
        <p>[국내 지역]</p>
        <div >
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">제주도</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">강원도</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">울릉도</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">경주</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">여수</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">전주</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">대전</label>
          <input type="radio" name="korea" id="korea" />
          <label htmlFor="korea">기타</label>
          <input type="text" name="korea" id="korea" />
        </div>
      </FieldContainer>

      <FieldContainer radio={!radio}>
        <p>[해외 지역]</p>
        <div >
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">일본</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">미국</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">인도</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">필리핀</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">태국</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">코타키나발루</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">대만</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">중국</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">호주</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">베트남</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">싱가폴</label>
          <input type="radio" name="overseas" id="overseas" />
          <label htmlFor="overseas">기타</label>
          <input type="text" name="overseas" id="overseas" />
        </div>
      </FieldContainer>

      <FieldContainer>
        <p>[2.여행 날짜 정하기]</p>
        <div>

        </div>
      </FieldContainer>

      <FieldContainer>
          <p>[3. 여행 테마 정하기]</p>
          <div>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#자유여행</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#지금뜨는그곳</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#틈새여행</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#먹방여행</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#백패킹</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#프리미엄</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#겨울여행</label>
          <input type="radio" name="diary" id="diary" />
          <label htmlFor="diary">#기타여행</label>
          </div>
      </FieldContainer>

      <FieldContainer>
        <p>[4. 여행 후기 글 작성하기]</p>
        <div>
          <h3>〈여행 후기 정보〉</h3>
          <ul>
            <li>나라 : 국내/해외</li>
            <li>지역 : 국내지역/해외지역</li>
            <li>여행 날짜 : 2023/11/01 ~ 2023/11/05</li>
            <li>여행 테마 : #먹방여행</li>
          </ul>
        </div>
      </FieldContainer>

      <FieldContainer>

      </FieldContainer>

    </FormContainer>
    </>
  );
};

export default WriteForm;