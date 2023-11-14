import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { storage } from "../../api/FireBase";
import DiyAxiosApi from "../../api/DiyAxiosApi";
import Calendar from "react-calendar";
import { useEffect } from "react";

const FormContainer = styled.div`
  padding: 50px;
  margin: 40px 0px;
  width: 880px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-weight: bold;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center; // 수직 방향 중앙 정렬
  margin-bottom: 20px; // 하단 여백 추가
  .map {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 200px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;

const StyledLabel = styled.label`
  flex: 0 0 100px; // 라벨의 너비 고정
  margin-right: 10px; // 라벨과 입력 필드 사이 여백
  margin-top: 30px;
`;

const Title = styled.h1`
  color: #333;
  font-weight: bold;
  display: flex;
  justify-content: left;
  margin: 25px 40px;
  font-size: 17px;
`;

const StyledInput = styled.input`
  width: 90%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 40px;
  font-size: 16px;
  margin-bottom: 20px; // 입력창 아래에 여백 추가
`;

const StyledTextarea = styled.textarea`
  width: 90%; // 너비를 100%로 설정하여 컨테이너의 너비에 맞춤
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  height: 100px;
`;

const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
  gap: 10px; // 버튼 사이에 여백 추가
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  margin-top: 20px;
`;

const UploadButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 30px;

&:hover {
    background-color: #45a049;
    }
    `;

const FileUploadContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TravelTitle = styled.div`
    font-weight: lighter;
    line-height: 50px;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 0px 10px;

    h3 {
        font-weight: bold;
        font-size: 20px;
    }
`;

const PicForm = ({world,area,toDate,toDate1,theme}) => {
  const userId= window.localStorage.getItem("userId");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState([]);
  const navigate = useNavigate();

  const [listnum,setListNum] = useState([]);
  const [contentList,setContentList] =useState([]);
  const [urlList, setUrlList] = useState([]);


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    const contentList =content.concat(e.target.value) 
    setContent(contentList);
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUploadClick = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully!");
      fileRef.getDownloadURL().then((no) => {
        console.log("저장경로 확인 : " + no);
        const list = url.concat(no);
        setUrl(list);
      });
    });
  };


  const handleSubmit = async () => {
    alert(content[0],content[1])
    try {
      const rsp = await DiyAxiosApi.travelInsert(userId,world,area,toDate,toDate1,theme,title);
      alert(rsp.data);

      for(let i = 0;i>listnum.length;i++){
        const rsp2 = await DiyAxiosApi.travelInsert2(rsp.data,i,null,null, content[i]);
        console.log(rsp2);
      }
    } catch (error) {
      console.log(error);alert("글쓰기 실패22222");
    }};

    useEffect(()=>{
      const date1 = new Date(toDate);
      const date2 = new Date(toDate1);
      const d_day =date2.getDate() - date1.getDate() + 1
      if (d_day > 0) {
      setListNum([...Array(d_day)]);
    }},[toDate1])

    



  const handleReset = () => {
    setTitle("");
    setContent("");
    navigate("/DiyPage");
  };


  return (
    <>
    <Title>[ 후기 글 작성하기 ]</Title>
    <FormContainer>
        <TravelTitle>
            <p>
                <ul>
                <h3>〈내 여행 정보〉</h3>
                    <li>나라 : {world}</li>
                    <li>지역 : {area}</li>
                    <li>여행 날짜 : {toDate} ~ {toDate1}</li>
                    <li>여행 테마 : #{theme}</li>
                </ul>
            </p>
        </TravelTitle>
      <FieldContainer>
        <StyledLabel htmlFor="title">제목</StyledLabel>
        <StyledInput
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
      </FieldContainer>

      {listnum.map((e,index) =>{
        return(<>
        <div>{index+1}-Day</div>
      <FieldContainer>
      <StyledLabel htmlFor="map">지도</StyledLabel>
        <div className="map">
        </div>
      </FieldContainer>
      <FileUploadContainer>
        <StyledLabel htmlFor="picture">사진</StyledLabel>
        <StyledInput type="file" onChange={handleFileInputChange}/>
        <UploadButton onClick={handleUploadClick}>Upload</UploadButton>
      </FileUploadContainer>
      {url[{index}] && <UserImage src={url[{index}]} alt="uploaded" />}
      <FieldContainer>
        <StyledLabel htmlFor="content">내용</StyledLabel>
        <StyledTextarea
          id="content"
          name="content"
          value={content[{index}]}
          onChange={handleContentChange}
        />
      </FieldContainer>
      </>)})}
      <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>작성완료</SubmitButton>
        <SubmitButton onClick={handleReset}>취소</SubmitButton>
      </ButtonContainer>
    </FormContainer>
    </>
  );
};

export default PicForm;