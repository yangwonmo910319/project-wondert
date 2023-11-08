import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import LoginButtons from "../components/LoginButtons";
import LogoImg from "../images/메인로고1111-removebg-preview11.png";
import { useState } from "react";

const Headers =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #45474b;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
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
max-width: 1200px;
  width: 80px auto;
  margin: 0 auto;
`;

const Header = () => {
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
   
        <Headers>
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
                  <h1>유저아이디 :{userId} </h1>
                  <Menu onClick={() => navigate("/myinfo/CommunitySubMenu/Changemyinfo")}>내 정보 </Menu> 
             <Menu onClick={() => logout()}>로그아웃 </Menu> </>
             : <>            
             <Menu onClick={() => navigate("/login")}>로그인</Menu>
             <Menu onClick={() => navigate("/signup")}>회원가입 </Menu></> }
       
            </Menus2>           
              <LoginButtons />
              {/* 여긴 한박스로이루어져 로그인 했을때 따로 컴포넌트 필요 */}

          </NavBox>
          </Headers>
          <Contain>
      
        <main>
          <Outlet />
        </main>
      </Contain>
    </>
  );
};

export default Header;
