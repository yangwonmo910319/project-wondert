/*원모 페이지 */
import styled, { css } from "styled-components";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import ModalTest2 from "../../components/Userinfo/ModalTest";
import CommunityAxiosApi from "../../api/CommunityAxiosApi";
import { storage } from "../../api/FireBase";
const CommunityCss = styled.div`
width: 80%;
margin: 0 auto;
`;
const Item1=styled.div`
width: 10%;
`;
const Itemp=styled.div`
width: 20%;
`;
const Item2=styled.div`
width: 60%;
`;
const Content1=styled.input`
 margin-top: 10px;
  width: 100%;
  height: 25px;
  color:black;
  border:1px solid rgba(72, 100, 224, 1);
border-radius: 5px;
  font-size: 15px;

p{
  margin-top: 5px;
  border-right: 1px solid blue;
}
  
`;
const Content2=styled.div`
  width: 100%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid rgba(72, 100, 224, 1);
  border-radius: 4px;
  font-size: 16px;
  height: 300px;
  margin-top: 10px;
`;
const StyledTextarea = styled.textarea`
width: 100%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
padding: 10px;
border: none;
border-radius: 4px;
font-size: 16px;
height: 100%;
`;



const Content3=styled.div`

  width: 100%;
  height: 50px;
  border-radius: 10px;
  text-align: center; 
  padding: 7px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;

`;
const Item3=styled.button`
  width: 10%;
  height: 30px; 
  margin: 10px 10px;
    /* border:1px solid red; */
    background-color:#dfdfdf;
    border-radius: 10px;
     &:active{   
      background:rgba(72, 100, 224, 1);
    }
`;
const Content4=styled.div`
display: flex;
   margin-top: 10px;
  width: 100%;
  height: 50px;
  color:black;
  border:1px solid rgba(72, 100, 224, 1);
border-radius: 5px;
input{

  width: 90%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
`
const Item4=styled.button`
  width: 80%;
  height: 50px; 
  margin: 10px 10px;
    /* border:1px solid red; */
    background-color:#dfdfdf;
    border-radius: 10px;
     &:active{   
      background: #F4CE14;;
    }
`;
const Menu=styled.div`
  width: 100%;
  height: 50px;
  margin-top: 50px;
  font-size: 25px;
  p{
    width: 180px;
    border-bottom: 3px solid  #F4CE14;
  }
`;

const UserImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 5px;
padding: 10px;
border: 1px solid black;
  margin-top: 20px;
`;


const CommunityView = () => { 
  const navigate = useNavigate();
  const isLoggedin = window.localStorage.getItem("isLogin") === 'true';
  const [userId , setUserId] = useState(window.localStorage.getItem("userId")); 
  const [title, setTitle] = useState(""); 
  const [content1, setContent] = useState(""); 
  const [File, setFile] = useState(""); 
  const [url, setUrl] = useState("");
  const titleChage = (e) => {
    setTitle(e.target.value);
  };
  const contentChage = (e) => {
    setContent(e.target.value);
  };
  const fileChage = (e) => {
    setFile(e.target.files[0]);
  };

  
  const Submit = async () => {
    try {
      const rsp = await CommunityAxiosApi.insertCommunity(title, content1, userId, url);
      if (rsp.data === true) {
        alert("글쓰기 성공");
        navigate("/Community");
      } else {
        alert("글쓰기 실패");
      }
    } catch (error) {  alert("글쓰기 실패");
      console.log(error);
    }
  };

  const fileuploade = async () => {   
 
    try {  
 
      const storageRef = storage.ref();
      const fileRef = storageRef.child(File.name);
     
      // 파일을 업로드하고 기다립니다.
      await fileRef.put(File);
      console.log("File uploaded successfully!");
    
      // 다운로드 URL을 가져오고 기다립니다.
      const url = await fileRef.getDownloadURL();
      console.log("저장경로 확인 : " + url);
  
      // 상태를 업데이트합니다.
      setUrl(url);
  
    } catch (error) {
      // 에러를 처리합니다.
     
      console.error("Upload failed", error);
    }
  };
  useEffect(()=>{ 
    if (!isLoggedin) {
     
      navigate('/Login');
    } },[])

  return (
    <CommunityCss>      
    <Menu><p>커뮤니티 게시판</p></Menu>
       <Content1 placeholder={"제목"}  value={title}
          onChange={titleChage} >

           </Content1>      
            <Content2>
     
        <StyledTextarea
          id="content"
          name="content"
          value={content1}
          onChange={contentChage} placeholder="내용"
        />
      
      </Content2>
      {url &&  <UserImage src={url} alt="uploaded"/> }
            <Content4>     
            <input type="file" onChange={fileChage} />
            <Item3 onClick={fileuploade}>업 로 드  </Item3>    
       
       </Content4> 
       <Content3>

       <Item4 onClick={Submit}>확 인 </Item4>    
         <Item4 onClick={()=>{ navigate("/Community")}}>취 소 </Item4>    
       </Content3> 
  
    
    </CommunityCss>
  );
};

export default CommunityView;
