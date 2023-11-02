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

function App() {
  return (
    <>
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
              <Route
                path="/Community/myinfo/CommunitySubMenu"
                element={<CommunitySubMenu />}
              >
                <Route
                  path="/Community/myinfo/CommunitySubMenu/Changemyinfo"
                  element={<Changemyinfo />}
                ></Route>
                <Route
                  path="/Community/myinfo/CommunitySubMenu/ChangePwd"
                  element={<ChangePwd />}
                ></Route>
              </Route>

              <Route
                path="/Community/myinfo/CommunityFavorites"
                element={<CommunityFavorites />}
              />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
