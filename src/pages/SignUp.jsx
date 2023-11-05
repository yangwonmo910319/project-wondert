import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../components/home/Model";
// import AxiosApi from "../api/AxiosApi";
import styled, { css } from "styled-components";
import Logo from "../images/메인로고1111-removebg-preview11.png";
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

const Button = styled.button`
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: bold;
  width: 100%; /* 원하는 너비 설정 */
  height: 50px;
  color: white;
  background-color: #999;
  font-size: 15px;
  font-weight: 400;
  border-radius: 12px;
  border: orange;
  font-weight: 700;
  ${(props) =>
    props.enabled &&
    css`
      background-color: red;//취소 색상
    `};

  &:active {
    border: #999;
    font-weight: 700;
    background-color: blue; //버튼 클릭시
  }
`;

const Signup = () => {
  const navigate = useNavigate();
  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAdd, setInputAdd] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [addMessage, setAddMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");
  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isMail, setIsMail] = useState(false);
  const [isAdd, setisAdd] = useState("");
  const [isPhone, setisPhone] = useState("");
  // 팝업
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModelText] = useState("중복된 아이디 입니다.");

  const closeModal = () => {
    setModalOpen(false);
  };

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
  const onChangePw = (e) => {
    //const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 : )");
      setIsPw(true);
    }
  };
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== inputPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다. )");
      setIsConPw(true);
    }
  };
  const onChangeName = (e) => {
    setInputName(e.target.value);
    setIsName(true);
  };
  const onChangeadd = (e) => {
    setInputAdd(e.target.value);
    setisAdd(true);
  };
  const onChangeMail = (e) => {
    setInputEmail(e.target.value);
    setIsMail(true);
  };
  const onChangePhone = (e) => {
    setInputPhone(e.target.value);
    setisPhone(true);
  };
  const onClickLogin = async () => {
    console.log("Click 회원가입");
    // 가입 여부 우선 확인
    // const memberCheck = await AxiosApi.memberRegCheck(inputId);
    // console.log("가입 가능 여부 확인 : ", memberCheck.data);
    // 가입 여부 확인 후 가입 절차 진행

    // if (memberCheck.data.result === "OK") {
    //   console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
      // const memberReg = await AxiosApi.memberReg(
      //   inputId,
      //   inputPw,
      //   inputName,
      //   inputEmail
      // );
    //   console.log(memberReg.data.result);
    //   if (memberReg.data.result === "OK") {
    //     navigate("/");
    //   } else {
    //     setModalOpen(true);
    //     setModelText("회원 가입에 실패 했습니다.");
    //   }
    // } else {
    //   console.log("이미 가입된 회원 입니다.");
    //   setModalOpen(true);
    //   setModelText("이미 가입된 회원 입니다.");
    // }
  };

  return (
    <Container>
          <Items className="logo">
          <img src={Logo} alt="Logo" />
      </Items>
      <Items className="sign">
        <span>회원가입</span>
      </Items>

      <Items className="item2">
        <Input placeholder="아이디" value={inputId} onChange={onChangId} />
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`message ${isId ? "success" : "error"}`}>
            {idMessage}
          </span>
        )}
      </Items>
      <Items className="item2">
        <Input
          type="password"
          placeholder="패스워드"
          value={inputPw}
          onChange={onChangePw}
        />
      </Items>
      <Items className="hint">
        {inputPw.length > 0 && (
          <span className={`message ${isPw ? "success" : "error"}`}>
            {pwMessage}
          </span>
        )}
      </Items>
      <Items className="item2">
        <Input
          type="password"
          placeholder="패스워드 확인"
          value={inputConPw}
          onChange={onChangeConPw}
        />
      </Items>
      <Items className="hint">
        {inputPw.length > 0 && (
          <span className={`message ${isConPw ? "success" : "error"}`}>
            {conPwMessage}
          </span>
        )}
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="이름"
          value={inputName}
          onChange={onChangeName}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="연락처"
          value={inputPhone}
          onChange={onChangePhone}
        />
      </Items>
      <Items className="item2">
        <Input
          type="email"
          placeholder="이메일"
          value={inputEmail}
          onChange={onChangeMail}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="주소"
          value={inputAdd}
          onChange={onChangeadd}
        />
      </Items>

      <Items className="item2">
        {isId && isPw && isConPw && isName && isMail ? (
          <Button enabled onClick={onClickLogin}>
            확인
          </Button>
        ) : (
          <Button disabled>   확인</Button>
        )}
         <Button enabled>   취소</Button>
        <Modal open={modalOpen} close={closeModal} header="오류">
          {modalText}
        </Modal>
      </Items>
    </Container>
  );
};

export default Signup;