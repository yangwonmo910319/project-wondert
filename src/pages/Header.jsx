import { Outlet, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import LoginButtons from "../components/LoginButtons";

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1200px;
  height: 80px;
  border-bottom: 2px solid white;
  color: white;
  background-color: #2828284e;
  font-weight: bold;
  position: relative;
  left: 0;
`;
const Logo = styled.img`
  display: flex;
  align-items: center;
  width: 100px;
  height: 80px;
  background-image: url("images/메인로고1111-removebg-preview11.png"); //이미지가 안들어감 ㅠㅠ
  background-size: cover;
  border: 1px solid black;
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
const Contain = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Contain>
        <header>
          <NavBox>
            <Logo />
            <Menus>
              <Menu onClick={() => navigate("/Diypage")}>DIY여행일지</Menu>
              <Menu onClick={() => navigate("/Course")}>추천 코스 </Menu>
              <Menu onClick={() => navigate("/Goods")}>1인전용상품</Menu>
              <Menu
                onClick={() =>
                  navigate("/Community/myinfo/CommunitySubMenu/Changemyinfo")
                }
              >
                커뮤니티
              </Menu>
            </Menus>
            <div></div>
            <div>
              로그인 회원가입
              <LoginButtons />
              {/* 여긴 한박스로이루어져 로그인 했을때 따로 컴포넌트 필요 */}
            </div>
          </NavBox>
        </header>
        <main>
          <Outlet />
        </main>
        <footer></footer>
      </Contain>
    </>
  );
};

export default Header;
