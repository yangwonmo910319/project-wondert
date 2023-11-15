import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import LoginButtons from "../components/LoginButtons";
import LogoImg from "../images/메인로고1111-removebg-preview11.png";
import { useState } from "react";

const Headers =styled.div`
  position: relative;
  z-index: 110;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${(props)=>!props.white ? "1px solid black":"1px solid white"};
    color:${(props)=>!props.white ? "black":"white"};
`;

const NavBox = styled.div`
  position: relative;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
  height: 60px;
  font-weight: 900;
  position: relative;
  left: 0;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 110px;
  height: 70px;
  object-fit: cover;
  margin: 0 10px;
  cursor: pointer;
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
`;

const Menus2 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
`;


const Menu = styled.p`
  display: flex;
  align-items: center;
  height: 60px;
  margin: 20px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #f4ce14;
  }
`;
const Contain = styled.div`
  margin: 0 auto;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 250px;
  margin-top: 200px;
  background-color: #F4CE14;
  .footerBox{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 250px;
  font-weight: 200;
  position: relative;
  left: 0;

}

  .box{
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    width: 300px;
    height: 200px;
    line-height: 20px;
    font-size: 10px;
    margin: 50px;
    color: #45474B;
  
    p{
      padding-left: 30px;
    }
    h{
      display: flex;
      align-items: center;
      justify-content: center;
      line-height:30px;
      font-size: 27px;
      width: 300px;
      height: 100px;
      font-weight: bold;
      color:black;
      flex-direction: column;
    }
  }`;



const Header = ({ white }) => {
  const navigate = useNavigate();

  const [login, setlogin] = useState(  window.localStorage.getItem("isLogin")); 
  const userId=localStorage.getItem("userId");

  const logout = () => {
window.localStorage.setItem("isLogin", "false");
setlogin("logout");
navigate("/");
  }

  return (
    <>
   
        <Headers white={white}>
          <NavBox>
            <Logo onClick={() => navigate("/")} src={LogoImg} />
            <Menus>
              <Menu onClick={() => navigate("/Diypage")}>DIY여행일지</Menu>
              <Menu onClick={() => navigate("/Course")}>추천 코스 </Menu>
              <Menu onClick={() => navigate("/Goods")}>1인전용상품</Menu>
              <Menu onClick={() => navigate("/Community")}>커뮤니티</Menu>
  
            </Menus>
            <Menus2>
              {login === "true"?               <>
                  <h1>{userId} </h1>
                  <Menu onClick={() => navigate("/myinfo/CommunitySubMenu/Changemyinfo")}>내 정보 </Menu> 
             <Menu onClick={() => logout()}>로그아웃 </Menu> </>
             : <>            
             <Menu onClick={() => navigate("/login")}>로그인</Menu>
             <Menu onClick={() => navigate("/signup")}>회원가입 </Menu></> }
       
            </Menus2>           
          </NavBox>
          </Headers>
          <Contain>
      
        <main>
          <Outlet />
        </main>
        <Footer>
        <div className="box">
        <h>Address & Contact</h>
        <p>대표번호 : 1588-0040
        <br/>서울특별시 관악구 신사로 12길 31, 원더투어 빌딩 7층
        <br/>관악지사 대표번호 : 010-9118-4899
        <br/>서울시 강남구 역삼동 110 - 119 kh빌딩 2층</p>
        </div>



      <div className="box">
      <h>Wonder - World <a>Information</a></h>
      <p>(주)원더월드 대표 : 손인천 / 양원모 / 황선영 / 차하늘
      <br/>사업자등록번호 : 2222-2222-2222 관악지사
      <br/>사업자등록 번호 : 2222-222-222
      <br/>관광사업자등록번호 : 제 2222-777777호
      <br/>통신판매업신고번호 : 난곡 777번</p>
      </div>



        <div className="box">
        <h>Follow Us</h>
        <p>여행자 배상책임보험 15억원 가입일반여행업 보증금외 15억원
        <br/>copyrights 2022. all rights reserved by (주)원더월드</p>
        </div>
        
        
        
        
        
        
        </Footer>
      </Contain>
    </>
  );
};

export default Header;
