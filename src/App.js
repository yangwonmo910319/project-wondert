import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from './pages/Header';
import Main from './pages/Main';
import Community from './pages/Community';
import Course from './pages/Course';
import DiyPage from './pages/DiyPage';
import Goods from './pages/Goods';

function App() {
  return (
    <>
    <Router>
      <Routes>
        {/*헤더영역 공통 레이아웃*/}
        <Route element={<Header/>}>  
          {/*메인 영역*/}
          <Route path="/" element={<Main/>}/>
          <Route path="/Community" element={<Community/>}/>
          <Route path="/Course" element={<Course/>}/>
          <Route path="/Diypage" element={<DiyPage/>}/>
          <Route path="/Goods" element={<Goods/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
