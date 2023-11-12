import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import DiyAxiosApi from "../../api/DiyAxiosApi";

const Course = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TravelTitle = styled.div`
    p {
    margin: 20px 15px;
    line-height: 30px;
    }
    h5 {
    font-size: 17px;
    font-weight: bold;
    margin: 10px 5px;
    }
    ul {
        border: 1px solid lightgray;
        border-radius: 5px;
        padding: 20px 40px; 
    }
    li {
        font-size: 12px;
        list-style: circle;
        line-height: 40px;
    }
    h3 {
    font-weight: bold;
    margin: 10px 0;
    }
`;

const TavelCs = styled.div`
    .course_wrap h4{
        font-weight: bold;
        margin: 20px 20px;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
    }
    .pic1 {
        margin-left: 60px;
    }
    .wrapper img {
        width: 350px;
        height: 250px;
        margin: 0px 60px;
    }
    p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 350px;
        height: 250px;
        border: 1px solid black;
    }
    b {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 750px;
        height: 180px;
        margin: 30px;
        border: 1px solid black;
    }
    `;

    const Course1 = styled.div`
        display: flex;
        flex-direction: row;
    `;
    const Day = styled.div`
        font-size: 25px;
        font-weight: bold;
    `;
    const Travel = styled.div`
      
    `;
    const Travel2 = styled.div`
        font-size: 15px;
        border: 1px solid lightgray;
        padding: 150px 150px;
    `;
    const Travel3 = styled.div`

    `;


const TravelCourse = () => {
    const [travelCourse, setTravelCourse] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        alert(window.localStorage.getItem("travelNum"));
        const TravelCourse = async () => {
            try {
                const rsp = await DiyAxiosApi.travelContent(window.localStorage.getItem("travelNum"));
                setTravelCourse(rsp.data);
            }catch(e) {
                alert(e);
            }
        };
        TravelCourse();
    }, []);

    return (
        <Course>
            <TravelTitle>
                <p>
                    <h5>[4. 여행 후기 정보]</h5>
                        <ul>
                        <h3>〈내 여행 정보〉</h3>
                            <li>나라 : 국내/해외</li>
                            <li>지역 : 국내지역/해외지역</li>
                            <li>여행 날짜 : 2023/11/01 ~ 2023/11/05</li>
                            <li>여행 테마 : #먹방여행</li>
                        </ul>
                </p>
            </TravelTitle>
            <TavelCs>
                {travelCourse && 
                travelCourse.map((data) => (
                    <Course1
                    key={data.travel_num} >
                        <Day>Day -{data.d_day}</Day>
                        <Course1>
                            <Travel><img src={data.travel_pic} alt="사진" width="200px" height="200px" /></Travel>
                            <Travel2>{data.travel_writing}</Travel2>
                            <Travel3>{data.travel_map}</Travel3>
                        </Course1>
                    </Course1>
                ))}
            </TavelCs>
        </Course>
    );
};

export default TravelCourse;