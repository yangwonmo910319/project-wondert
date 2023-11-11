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

const CommunityWrite = () => {

    const navigate = useNavigate();
    const handleReset = () => {
      navigate("/DiyPage");
    };
    const[travelCourse, setTravelCourse] = useState();
    const [num,setNum] = useState("T1");
    const [pic, setPic] = useState("");
    const [title,setTitle] = useState("");
    const [id, setId] = useState("");
    const [writeDate, setWriteDate] = useState("");
    const [view, setView] = useState("");

 useEffect(() => {
    const travelCourse = async () => {
    try {
        const resp = await DiyAxiosApi.travelCourse(num,pic,title,id,writeDate,view);
        
        if(resp.status === 200) setNum(resp.data);
        if(resp.status === 200) setPic(resp.data);
        if(resp.status === 200) setTitle(resp.data);
        if(resp.status === 200) setId(resp.data);
        if(resp.status === 200) setWriteDate(resp.data);
        if(resp.status === 200) setView(resp.data);
    } catch(e) {
        console.log(e);
    }};
    travelCourse();
}, [num,pic,title,id,writeDate,view]);


    return (
        <>
        {travelCourse && 
            travelCourse.map(data => (
    <Detail key={data.num}>
        <h2>게시글 상세</h2>
            <section className="article-detail table-common con row">
                <table className="cell">
                    <tbody>
                        <tr className="article-title">
                            <th>{data.num} 제목 : `${data.title}`</th>
                        </tr>
                        <tr className="article-info">
                            <td>{data.writeDate}</td>
                            <td>{data.userId}</td>
                            <td>{data.view}👀</td>
                            <td>즐겨찾기 ⭐️</td>
                            <td>{data.good}👍</td>
                        </tr>
                        <tr className="article-course">
                            <TravelCourse />
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

export default CommunityWrite;