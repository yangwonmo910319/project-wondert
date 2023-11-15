import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DiyAxiosApi from '../../api/DiyAxiosApi';
import { useNavigate } from 'react-router-dom';

const Title = styled.div`
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-weight: bold;
    margin: 30px 80px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  
  table {
    text-align: center;
  }
  th {
    font-weight: bold;
    font-size: 20px;
    border: 1px solid lightgray;
    padding: 10px 10px;
  }
  td {
    border: 1px solid lightgray;
    cursor: pointer;
    padding: 5px 5px;
    font-size: 15px;
  }
`;

const WriteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  margin-top: 20px;
  padding: 10px 15px;
  font-weight: bold;
  background-color: #4caf50;
  color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #46a049;
  }
  &:active {
    background-color: #3e8e41;
  }
`;

const PostList = ({tema,world})=> {
  const [travelList, setTravelList] = useState("");
  const navigate = useNavigate();

  const onClick =(travelNum,world,area,to_date,e_Date,tv_theme)=>{
    window.localStorage.setItem("travelNum",travelNum);
    window.localStorage.setItem("world",world);
    window.localStorage.setItem("area",area);
    window.localStorage.setItem("to_date",to_date);
    window.localStorage.setItem("e_Date",e_Date);
    window.localStorage.setItem("tv_theme",tv_theme);
    navigate("/DiyPage/Diyview");
  }

  useEffect(()=>{
    const travelList = async ()=>{
    try{
        const resp = await DiyAxiosApi.travelList(world, tema); //전체 조회
        if(resp.status === 200) {
          setTravelList(resp.data);
        }else{
          alert(resp.data);
        }
    }catch(e){
        console.log(e);
    }};
    travelList();
},[world,tema]);

const handleWriteClick = () => {
  navigate("/DiyPage/DiyWrite");
};

  return (
    <Wrap>
      <Title>
        <p>[DIY 여행 일지 공유 게시판] -# {tema}</p>
      </Title>
      <table>
        <tr>
          <th>글번호</th>
          <th>사진</th>
          <th>제목</th>
          <th>아이디</th>
          <th>등록일</th>
          <th>조회수</th>
        </tr>
      {travelList &&
      travelList.map(data => (
        <tr onClick={()=>onClick(data.travel_num,data.travel_world,data.travel_area,data.travel_startdate,data.travel_enddate,data.travel_theme)}>
          <td>{data.travel_num}</td>
          <td>{data.travel_pic} </td>
          <td>{data.travel_title}</td>
          <td>{data.travel_userid}</td>
          <td>{data.travel_writedate}</td>
          <td>{data.travel_view}</td>
        </tr>
         ))}
         </table>
         <WriteButton onClick={handleWriteClick}>글쓰기</WriteButton>
    </Wrap>
  );
};

export default PostList;