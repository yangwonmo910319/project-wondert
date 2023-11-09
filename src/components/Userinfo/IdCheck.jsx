


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AxiosApi from "../api/AxiosApi";
import styled, { css } from "styled-components";
const Container = styled.div` 
    
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 500px;
  margin: 50px auto;

  .success {
    color: royalblue;
  }
  .error {
    color: red;
  }
`;

const Items = styled.div`

  display: flex;
  align-items: center;
 &.logo{
 margin: 0 auto;
img{
  width: 400px;
}
 }
  &.item1 {
    margin-top: 100px;
    margin-bottom: 40px;
    justify-content: center;
  }

  &.item2 {
    margin: 10px;
  }

  &.item3 {
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
  }

  &.hint {
    margin-top: -5px;
    margin-bottom: 10px;
    margin-right: 40px;
    justify-content: right;
    font-size: 12px;
    color: #999;
  }
  &.sign {

 margin: 0 auto;
 
    font: normal normal bold 24px/35px Poppins;
    letter-spacing: 0px;
    color: #313131;
    opacity: 1;
  }
`;

const Input = styled.input`
  margin-left: 30px;
  margin-right: 30px;
  width: 100%; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #999;
  border-radius: 12px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;



const IdCheck = ( {onValueChange,style1}  ) => {
    alert(style1);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
      onValueChange(value); // 부모에게 값 전달
    };
  const navigate = useNavigate();
  // 키보드 입력
  const [inputId, setInputId] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [idMessage2, setIdMessage2] = useState(null);


  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isId2, setIsId2] = useState(false);


    
  
  
  const onChangId = (e) => {

    setInputId(e.target.value);
    if (e.target.value.length < 5 || e.target.value.length > 12) {
      setIdMessage("5자리 이상 12자리 미만으로 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식 입니다.");
      setIsId(true);
    }
  };


  const onDBIdCheck=async()=>{

    // const memberCheck = await UserAxiosApi.SingupIdCheck(inputId);

//     if (memberCheck.data === true) { 
//       setIdMessage2("가입된 아이디가 없습니다.");
//       setIsId2(true)
      
//   }else{
//     setIsId2(false)
//     setIdMessage2("가입된 아이디가 있습니다.");

  };

  const onClickLogin = async () => {
    //   console.log("가입을 합니다.");
    //   const signup = await UserAxiosApi.Signup(
    //     inputId,

       
    //   );
    //   console.log(signup.data.result);
    //   if (signup.data === true) {       
    //     navigate("/");
    //   } else {

    //   }
    // } ;
  };
  return (
    <Container>
        <h1>아이디체크 창</h1>
      <Items className="item2" >
        <Input placeholder="아이디" value={inputId} onChange={onChangId}  onBlur={onDBIdCheck}   />
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`message ${isId ? "success" : "error"}`}>
            {idMessage}
          </span>
        )}
      </Items>
      <Items className="hint">

        {idMessage2 ==null ?        
       <></>
        :  isId2 !== true ?  <span className={"message error"}>
        {idMessage2}
      </span>:  <span className={"message success"}> 
        {idMessage2}
      </span>
        }
      </Items>
      <label>
        Child 입력:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>

    </Container>
  );
};

export default IdCheck;