import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Community from "./pages/Community";
import Course from "./pages/Course";
import DiyPage from "./pages/DiyPage";
import Goods from "./pages/Goods";
import CommunityFavorites from "./pages/Community/CommunityFavorites";
import Changemyinfo from "./pages/Community/Changemyinfo";
import CommunitySubMenu from "./pages/Community/CommunitySubMenu";
import ChangePwd from "./pages/Community/ChangePwd";
import UserOut from "./pages/Community/UserOut";
import FavorDiy from "./pages/Community/FavorDiy";
import FavorCourse from "./pages/Community/FavorCourse";
import FavorGoods from "./pages/Community/FavorGoods";
import { createGlobalStyle } from 'styled-components'
import reset from "styled-reset"
import * as React from 'react'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

function App() {
  return (
    <>
 <React.Fragment>
    <GlobalStyle />
      <Router>
        <Routes>
          {/*헤더영역 공통 레이아웃*/}
          <Route element={<Header />}>
            {/*메인 영역*/}
            <Route path="/" element={<Main />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/Diypage" element={<DiyPage />} />
            <Route path="/Goods" element={<Goods />} />
            <Route path="Community/myinfo" element={<Community />}>
              <Route path="/Community/myinfo/CommunitySubMenu"element={<CommunitySubMenu />}>
                 <Route path="/Community/myinfo/CommunitySubMenu/Changemyinfo" element={<Changemyinfo />}></Route>
                 <Route path="/Community/myinfo/CommunitySubMenu/ChangePwd"element={<ChangePwd />}></Route>
                 <Route path="/Community/myinfo/CommunitySubMenu/UserOut"element={<UserOut />}></Route>
              </Route>
              <Route path="/Community/myinfo/CommunityFavorites"element={<CommunityFavorites />}>
                 <Route path="/Community/myinfo/CommunityFavorites/FavorDiy" element={<FavorDiy/>}></Route>
                 <Route path="/Community/myinfo/CommunityFavorites/FavorCourse" element={<FavorCourse/>}></Route>
                 <Route path="/Community/myinfo/CommunityFavorites/FavorGoods" element={<FavorGoods/>}></Route>
          
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
