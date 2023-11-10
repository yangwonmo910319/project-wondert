import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import DiyAxiosApi from '../../api/DiyAxiosApi';
import { Navigate, useNavigate } from 'react-router-dom';
import { Navigation } from 'react-calendar';

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

const PostList = ({tema}) => {
  const [travelList, setTravelList] = useState("");
  const [theme,setTheme] = useState(tema); 
  const [world, setWorld] = useState("korea");
  const navigate = useNavigate();

  const onClick =(e)=>{
    navigate("/DiyPage/Diyview");
    window.localStorage.getItem("e", e);
  }


  useEffect(()=>{
    const travelList = async ()=>{
    try{
      console.log("월드 정보"+world);
      console.log("")
        const resp = await DiyAxiosApi.travelList(world, (tema)); //전체 조회
        console.log(("화면 렌더링") + world,theme);
        if(resp.status === 200) {
          setTravelList(resp.data);
        console.log(resp.data);}
        else{
        }
    }catch(e){
        console.log(e);
    }};
    travelList();
},[tema]);

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
        <tr onClick={onClick}>
          <td>{data.travel_num}</td>
          <td>{data.travel_pic} </td>
          <td>{data.travel_title}</td>
          <td>{data.travel_userid}</td>
          <td>{data.travel_writedate}</td>
          <td>{data.travel_view}</td>
        </tr>
         ))}
         </table>
  
    </Wrap>
  );
};

export default PostList;