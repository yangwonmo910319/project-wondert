import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/home/Model";
import Logo from "../images/메인로고1111-removebg-preview11.png";
import styled, { css } from "styled-components";
import UserAxiosApi from "../api/UserAxiosApi";
import IdCheck from "../components/home/IdCheck"
//Css 분리
import { Container,Hint,Items,Input,Button} from '../../src/pages/TestCss'; // TestCss 파일에서 Css1을 export하고 있음



const Login = () => {

  const navigate = useNavigate();

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    alert(inputId)
    alert(inputPw)
    setModalOpen(false);
  };

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeId = (e) => {
    const regexId = /^\w{5,20}$/;
    setInputId(e.target.value);
    if (!regexId.test(e.target.value)) {
      setIdMessage("5자리 이상 20자리 미만으로 입력해 주세요.");
      setIsId(false);
    } else {
      setIdMessage("올바른 형식 입니다.");
      setIsId(true);
    }
  };

  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("");
      setIsPw(true);
    }
  };
  const onClickLogin = async () => {
    //로그인을 위한 axios 호출
    const res = await UserAxiosApi.Login(inputId, inputPw);

    console.log(res.data);
    if (res.data === true) {  
      window.localStorage.setItem("userId", inputId); // 브라우저에서 임시로 값을 저장하는 기술
      window.localStorage.setItem("isLogin", "true");
      navigate("/");
    } else {
      setModalOpen(true);
    }
  };
 const goHome = ()=>{
  navigate("/");
 }
  return (
    <Container>
      
      <Items className="item1">
        <img src={Logo} alt="Logo" />
      </Items>
      <Items className="login">
        <span>로그인</span>
      </Items>
<IdCheck inputId={inputId} onChangeId={onChangeId}></IdCheck>

      <Hint>
        {inputId.length > 0 && (
          <span className={`${isId ? "success" : "error"}`}>{idMessage}</span>
        )}
      </Hint>

      <Items className="item2">
        <Input type="password" placeholder="패스워드" value={inputPw} onChange={onChangePw} />
      </Items>
      <Hint>
        {inputPw.length > 0 && (
          <span className={`${isPw ? "success" : "error"}`}>{pwMessage}</span>
        )}
      </Hint>
   
      <Button disabled={false} onClick={() => {onClickLogin()}}>확 인</Button>

         <Button enbled onClick={() => {goHome()}} >취 소</Button>
      <Modal open={modalOpen} close={closeModal} header="오류">
         아이디 및 패스워드를 확인해 주세요.
       </Modal>
       <Items className="item3">
       {/* <Items className="signin">
         <Link to="/Signup" className="link_style">
         <span>아이디 찾기</span>
         </Link>
      </Items> */}
      <Items className="signup">
         <Link to="/Signup" className="link_style">
         <span>회원가입</span>
         
        </Link>
      </Items>
      </Items>
    </Container>
  );
};
export default Login;