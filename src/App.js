import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "../src/pages/Login";
import SignUP from "../src/pages/SignUp";
import Main from "./pages/Main";
import Myinfo from "./pages/Myinfo";
import DiyPage from "../src/pages/DIY/DiyPage";
import DiyWrite from "../src/pages/DIY/DiyWrite";
import DiyView from "../src/pages/DIY/Diyview";
import Goods from "./pages/Goods/Goods";
import Community from "./pages/Community";
import CommunityView from "./pages/Community/CommunityView";
import CommunityWrite from "./pages/Community/CommunityWrite";
import CommunityFavorites from "../src/components/Community/CommunityFavorites";
import Changemyinfo from "./components/Community/Changemyinfo";
import CommunitySubMenu from "../src/components/Community/CommunitySubMenu";
import ChangePwd from "./components/Community/ChangePwd";
import UserOut from "./components/Community/UserOut";
import FavorDiy from "./components/Community/FavorDiy";
import FavorCourse from "./components/Community/FavorCourse";
import FavorGoods from "./components/Community/FavorGoods";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import * as React from "react";
import Goodsinfo from "./pages/Goods/Goodsinfo";
import Goodssell from "./pages/Goods/Goodssell";
import Goodscompleted from "./pages/Goods/Goodscompleted";
import Goodscancle from "./pages/Goods/Goodscancle";
import { useState, useCallback } from "react";
import CourseDetail from "./pages/Course/CourseDetail";
import Course from "./pages/Course/Course";

const GlobalStyle = createGlobalStyle`
  ${reset}
    
  *{  
    box-sizing : border-box;
  }
  body{
    font-family: Nanum;
  }
  /* other styles */
`;

function App() {
  const [itemCode, setItemCode] = useState("");
  const onSelect = useCallback((onselect) => setItemCode(onselect), []);

  return (
    <>

        <React.Fragment>
          <GlobalStyle />
          <Router>
            <Routes>
              {/*헤더영역 공통 레이아웃*/}
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Main />} />
              <Route path="/Test" element={<Test />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUP" element={<SignUP />} />
              <Route element={<Header />}>
                {/*메인 영역*/}

                <Route path="/Course" element={<Course />} />
                <Route path="/Diypage" element={<DiyPage />} />
                <Route path="/Diypage/DiyWrite" element={<DiyWrite />} />
                <Route path="/Diypage/DiyView" element={<DiyView />} />
                <Route path="/Goods" element={<Goods onSelect={onSelect} />} />
                <Route path="/Community" element={<Community />} />
                <Route path="/CommunityWrite" element={<CommunityWrite />} />
                <Route path="/Communityview/:num" element={<CommunityView />} />
                <Route
                  path="/Goods/info"
                  element={<Goodsinfo itemCode={itemCode} />}
                />
                <Route path="/Goods/sell" element={<Goodssell />} />
                <Route path="/Goods/cancle" element={<Goodscancle />} />
                <Route path="/Goods/completed" element={<Goodscompleted />} />
                <Route path="/Course/info" element={<CourseDetail />} />

                <Route path="/myinfo" element={<Myinfo />}>
                  <Route
                    path="/myinfo/CommunitySubMenu"
                    element={<CommunitySubMenu />}
                  >
                    <Route
                      path="/myinfo/CommunitySubMenu/Changemyinfo"
                      element={<Changemyinfo />}
                    ></Route>
                    <Route
                      path="/myinfo/CommunitySubMenu/ChangePwd"
                      element={<ChangePwd />}
                    ></Route>
                    <Route
                      path="/myinfo/CommunitySubMenu/UserOut"
                      element={<UserOut />}
                    ></Route>
                  </Route>
                  <Route
                    path="/myinfo/CommunityFavorites"
                    element={<CommunityFavorites />}
                  >
                    <Route
                      path="/myinfo/CommunityFavorites/FavorDiy"
                      element={<FavorDiy />}
                    ></Route>
                    <Route
                      path="/myinfo/CommunityFavorites/FavorCourse"
                      element={<FavorCourse />}
                    ></Route>
                    <Route
                      path="/myinfo/CommunityFavorites/FavorGoods"
                      element={<FavorGoods />}
                    ></Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Router>
        </React.Fragment>
    </>
  );
}

export default App;
