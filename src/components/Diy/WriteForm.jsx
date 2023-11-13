import React, { useState } from "react";
import styled from "styled-components";
import MyCalendar from "./Calendar";
import PicForm from "./PicForm";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";

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


const WriteForm = ({worldChange,areaChange,setToDate,setToDate1,setTheme}) => {
    const [radio,setRadio]=useState(false);
    const [areaTitle,setAreaTitle] = useState(false);
    const [areaTitleValue, setareaTitleValue] = useState('');
    const [themeTitle , setThemeTitle]= useState(false);
    const [themeTitleValue , setThemeTitleValue]= useState('');
  
    const onChangeRadio1 = (event) => {
      worldChange(event.target.value);
      setRadio(!radio);
    };

    const onChangedisable3 = (event) => {
      setareaTitleValue(event.target.value);
      areaChange(event.target.value);
     
    };
    const onChangedisable1 =(e) =>{
    areaChange(e.target.value);

    if(e.target.value==="기타"){
      setAreaTitle(true)
    }
    else{
      setAreaTitle(false);
    }
    }

    const onChange1 = (event) => {
      setTheme(event.target.value);
      if(event.target.value==="기타여행"){
        setThemeTitle(true)
      }
      else{
        setThemeTitle(false);
      }
    }
 const onChange3 =(e) =>{
  setThemeTitleValue(e.target.value);
  setTheme(e.target.value);
 }

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
        <label htmlFor="apple">
            <input type="radio" name="world" id="국내" value="국내" onChange={onChangeRadio1}/>국내
        </label>
        <br />
        <label htmlFor="orange">
            <input type="radio" name="world" id="해외" value="해외" onChange={onChangeRadio1}/>해외
        </label>
        <br />
      </div>
              {/* <input type="radio" id="world" name="world" value={world} onChange={onChangeRadio1} radio={radio}/>
              <label htmlFor="world">국내</label>
              <input type="radio" id="world" name="world" value={world} onChange={onChangeRadio} radio={!radio}/>
              <label htmlFor="world">해외</label> */}
           
        </FieldContainer>
        {radio ===true ?<FieldContainer>
        <p>[ 국내 지역 ]</p>
        <div>
          <input type="radio" name="korea" id="korea" value="제주도" onChange={onChangedisable1}/>
          <label htmlFor="korea">제주도</label>
          <input type="radio" name="korea" id="korea" value="강원도" onChange={onChangedisable1}/>
          <label htmlFor="korea">강원도</label>
          <input type="radio" name="korea" id="korea" value="울릉도" onChange={onChangedisable1}/>
          <label htmlFor="korea">울릉도</label>
          <input type="radio" name="korea" id="korea" value="경주" onChange={onChangedisable1}/>
          <label htmlFor="korea">경주</label>
          <input type="radio" name="korea" id="korea" value="여수" onChange={onChangedisable1}/>
          <label htmlFor="korea">여수</label>
          <input type="radio" name="korea" id="korea" value="전주" onChange={onChangedisable1}/>
          <label htmlFor="korea">전주</label>
          <input type="radio" name="korea" id="korea" value="대전" onChange={onChangedisable1}/>
          <label htmlFor="korea">대전</label>
          <input type="radio" name="korea" id="korea" value="기타" onChange={onChangedisable1} onClick={onChangedisable1}/> 
          <label htmlFor="text">기타</label>
          {areaTitle ===true ?     <input type="text" name="text" id="text" placeholder="직접입력" value={areaTitleValue} onChange={onChangedisable3} />    :      <></>} 

        </div>
      </FieldContainer> : <FieldContainer >
        <p>[ 해외 지역 ]</p>
        <div >
          <input type="radio" name="overseas" id="overseas" value="일본" onChange={onChangedisable1}/>
          <label htmlFor="overseas">일본</label>
          <input type="radio" name="overseas" id="overseas" value="미국" onChange={onChangedisable1}/>
          <label htmlFor="overseas">미국</label>
          <input type="radio" name="overseas" id="overseas" value="인도" onChange={onChangedisable1}/>
          <label htmlFor="overseas">인도</label>
          <input type="radio" name="overseas" id="overseas" value="필리핀" onChange={onChangedisable1}/>
          <label htmlFor="overseas">필리핀</label>
          <input type="radio" name="overseas" id="overseas" value="태국" onChange={onChangedisable1}/>
          <label htmlFor="overseas">태국</label>
          <input type="radio" name="overseas" id="overseas" value="코타키나발루" onChange={onChangedisable1}/>
          <label htmlFor="overseas">코타키나발루</label>
          <input type="radio" name="overseas" id="overseas" value="대만" onChange={onChangedisable1}/>
          <label htmlFor="overseas">대만</label>
          <input type="radio" name="overseas" id="overseas" value="중국" onChange={onChangedisable1}/>
          <label htmlFor="overseas">중국</label>
          <input type="radio" name="overseas" id="overseas" value="호주" onChange={onChangedisable1}/>
          <label htmlFor="overseas">호주</label>
          <input type="radio" name="overseas" id="overseas" value="베트남" onChange={onChangedisable1}/>
          <label htmlFor="overseas">베트남</label>
          <input type="radio" name="overseas" id="overseas" value="싱가폴" onChange={onChangedisable1}/>
          <label htmlFor="overseas">싱가폴</label>
          <input type="radio" name="overseas" id="overseas" value="기타" onChange={onChangedisable1} onClick={onChangedisable1}/>
          <label htmlFor="text">기타</label>
          {areaTitle ===true ?     <input type="text" name="text" id="text" placeholder="직접입력" value={areaTitleValue} onChange={onChangedisable3} /> : <></>} 
        </div>
      </FieldContainer>
}
      
     
      <FieldContainer>
        <p>[ 2.여행 날짜 정하기 ]</p>
        <div>
          <MyCalendar value={Calendar} setToDate={setToDate} setToDate1={setToDate1}/>
        </div>
      </FieldContainer>


      <FieldContainer>
          <p>[ 3. 여행 테마 정하기 ]</p>
          <div>
          <input type="radio" name="diary" id="diary" value={"자유여행"} onChange={onChange1}/>
          <label htmlFor="diary">#자유여행</label>
          <input type="radio" name="diary" id="diary" value={"지금뜨는그곳"} onChange={onChange1}/>
          <label htmlFor="diary">#지금뜨는그곳</label>
          <input type="radio" name="diary" id="diary" value={"틈새여행"} onChange={onChange1}/>
          <label htmlFor="diary">#틈새여행</label>
          <input type="radio" name="diary" id="diary" value={"먹방여행"} onChange={onChange1}/>
          <label htmlFor="diary">#먹방여행</label>
          <input type="radio" name="diary" id="diary" value={"백패킹"} onChange={onChange1}/>
          <label htmlFor="diary">#백패킹</label>
          <input type="radio" name="diary" id="diary" value={"프리미엄"} onChange={onChange1}/>
          <label htmlFor="diary">#프리미엄</label>
          <input type="radio" name="diary" id="diary" value={"겨울여행"} onChange={onChange1}/>
          <label htmlFor="diary">#겨울여행</label>
          <input type="radio" name="diary" id="diary" value={"기타여행"} onChange={onChange1 } onclick={onChange1}/>
          <label htmlFor="diary">#기타여행</label>
           {themeTitle ===true ?     <input type="text" name="text" id="text" placeholder="직접입력" value={themeTitleValue} onChange={onChange3} />    :      <></>} 
         
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