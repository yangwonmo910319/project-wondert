import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './pages/Header';
import Main from './pages/Main';
import Community from './pages/Community';
import Course from './pages/Course';
import DiyPage from './pages/DiyPage';
import Goods from './pages/Goods';
import Changemyinfo from './pages/Community/Changemyinfo';
import ChangePwd from './pages/Community/ChangePwd';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/*헤더영역 공통 레이아웃*/}
        <Route element={<Header/>}>  
          {/*메인 영역*/}
          <Route path="/" element={<Main/>}/>         
          <Route path="/Course" element={<Course/>}/>
          <Route path="/Diypage" element={<DiyPage/>}/>
          <Route path="/Goods" element={<Goods/>}/>
          <Route path="/Community/myinfo" element={<Community/>}>
          <Route path=":id" element={<Changemyinfo/>}/>
          <Route path="Community/ChangePwd" element={<ChangePwd/>}/>
            </Route>




        </Route>

      </Routes>
    </Router>
    </>
  );
}

export default App;
