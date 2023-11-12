import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TravelCourse from "./TravelCourse";
import { useNavigate } from "react-router-dom";
import DiyAxiosApi from "../../api/DiyAxiosApi";
import { useParams } from "react-router-dom";


const Detail = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
h2 {
    font-size: 30px;
    font-weight: bold;
    margin: 40px 80px;
}
.cell {
	float: left;
    box-sizing: border-box;
}
.con h1{
	width: 850px;
    font-size: 30px;
    margin: 30px 80px;
    font-weight: bold;
}
.table-common>table {
	width: 100%;
	border-collapse: collapse;
    margin: 0 70px;
}
.table-common>table th, .table-common>table td {
	border: 1px solid black;
	padding: 10px;
    height: 50px;
}
.article-title {
    border: 1px solid lightgray;
    width: 500px;
}
.article-title th,td {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.article-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
}
.article-detail > table {
    border:none;
    width:calc(100% - 100px);
}

.article-detail > table th, .article-detail > table td {
    border:none;
}

.article-detail > table tr:not(:last-child) {
    border-bottom:1px solid lightgray;
    width:880px;
    height: 40px;
}
.con_reply h1 {
   font-size:30px;
   font-weight: bold;
}
.article-course {
    border: 1px solid lightgray;
}
`;

const FieldContainer = styled.div`
`;

const SubmitButton = styled.div`
      cursor: pointer;
      background-color: #21c962;
      border-radius: 5px;
      padding: 20px 60px;
      font-size: 20px;
      color: white;
      font-weight: bold;
      width: 200px;
      height: 50px;
      margin: 20px 0;
`;

const CommunitySelectOne = () => {

    const navigate = useNavigate();
    const handleReset = () => {
      navigate("/DiyPage/CommunitySelectOne");
    };
    const[travelCourse, setTravelCourse] = useState();
    const [travelNum,setTravelNum] = useState("");
    const [travelPic, setTravelPic] = useState("");
    const [travelTitle,setTravelTitle] = useState("");
    const [travelUserId, setTravelUserId] = useState("");
    const [travelWriteDate, setTravelWriteDate] = useState("");
    const [travelView, setTravelView] = useState("");

    const [travelWorld,setTravelWorld] =useState("");
    const [travelTheme,setTravelTheme] = useState("");
    const [travelArea, setTravelArea] = useState("");
    const [travelStartDate, setTravelStartDate] = useState("");
    const [travelEndDate, setTravelEndDate] = useState("");
    const [travelGood, setTravelGood] = useState("");
    const [dDay, setDday] = useState("");
    const [travelWriting, setTravelWriting] = useState("");
    const [travelMap, setTravelMap] = useState("");

 useEffect(() => {
    const travelCourse = async () => {
    try {
        const resp = await DiyAxiosApi.travelCourse(travelNum,travelPic,travelTitle,travelUserId,travelWriteDate,travelView,travelWorld,travelTheme,travelArea,travelStartDate,travelEndDate,travelGood,dDay,travelWriting,travelMap);
        
        if(resp.status === 200) setTravelNum(resp.data);
        if(resp.status === 200) setTravelPic(resp.data);
        if(resp.status === 200) setTravelTitle(resp.data);
        if(resp.status === 200) setTravelUserId(resp.data);
        if(resp.status === 200) setTravelWriteDate(resp.data);
        if(resp.status === 200) setTravelView(resp.data);

        if(resp.status === 200) setTravelWorld(resp.data);
        if(resp.status === 200) setTravelTheme(resp.data);
        if(resp.status === 200) setTravelArea(resp.data);
        if(resp.status === 200) setTravelStartDate(resp.data);
        if(resp.status === 200) setTravelEndDate(resp.data);
        if(resp.status === 200) setTravelGood(resp.data);
        if(resp.status === 200) setDday(resp.data);
        if(resp.status === 200) setTravelWriting(resp.data);
        if(resp.status === 200) setTravelMap(resp.data);
    } catch(e) {
        console.log(e);
    }};
    travelCourse();
}, [travelNum,travelPic,travelTitle,travelUserId,travelWriteDate,travelView,travelWorld,travelTheme,travelArea,travelStartDate,travelEndDate,travelGood,dDay,travelWriting,travelMap]);


    return (
        <>
        {travelCourse && 
            travelCourse.map(data => (
    <Detail key={data.travelNum}>
        <h2>게시글 상세</h2>
            <section className="article-detail table-common con row">
                <table className="cell">
                    <tbody>
                        <tr className="article-title">
                            <th>{data.travelNum} 제목 : `${data.travelTitle}`</th>
                        </tr>
                        <tr className="article-info">
                            <td>{data.travelWriteDate}</td>
                            <td>{data.travelUserId}</td>
                            <td>{data.travelView} 👀</td>
                            <td>즐겨찾기 ⭐️</td>
                            <td>{data.travelGood} 👍</td>
                        </tr>
                        <tr className="article-course">
                            {/* <TravelCourse /> */}
                           <td>여행 일정 : {data.dDay}</td>
                           <td>여행 나라 : {data.travelWorld}</td>
                           <td>여행 지역 : {data.travelArea}</td>
                           <td>여행 날짜 : {data.travelStartDate} ~ {data.travelEndDate}</td>
                           <td>여행 테마 : {data.travelTheme}</td>
                        </tr>
                        <tr className="article-content">
                            <td>여행 다녀온 사진 : {data.travelPic}</td>
                            <td>여행 후기 글 : {data.travelWriting}</td>
                            <td>여행 일정 지도 : {data.travelMap}</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <FieldContainer>
            <SubmitButton onClick={handleReset}>목록으로</SubmitButton>
        </FieldContainer>
    </Detail>
    ))}
    </>
    );
};

export default CommunitySelectOne;