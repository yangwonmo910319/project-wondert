import styled, { css } from "styled-components";
import LoginButtons from "../components/LoginButtons";
import LogoImg from "../images/메인로고1111-removebg-preview11.png";
import {  useNavigate } from "react-router-dom";
const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid black;


  font-weight: bold;
  position: relative;
  left: 0;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 100px;
  height: 80px;
  object-fit: cover;
  margin: 0 10px;
`;
const Menus = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
`;

const Menu = styled.p`
  margin: 20px;
`;

const Nav =()=>{
    const navigate = useNavigate();
    return(
        
        <NavBox>
        <Logo src={LogoImg} onClick={() => navigate("/")}></Logo>
        <Menus>
          <Menu onClick={() => navigate("/Diypage")}>DIY여행일지</Menu>
          <Menu onClick={() => navigate("/Course")}>추천 코스 </Menu>
          <Menu onClick={() => navigate("/Goods")}>1인전용상품</Menu>
          <Menu onClick={() => navigate("/Community/myinfo/CommunitySubMenu/Changemyinfo")}>커뮤니티</Menu>
        </Menus>

          로그인 회원가입
          <LoginButtons />
          {/* 여긴 한박스로이루어져 로그인 했을때 따로 컴포넌트 필요 */}
    
      </NavBox>
    )
}
export default Nav;
