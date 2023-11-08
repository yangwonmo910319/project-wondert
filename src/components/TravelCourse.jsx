import React, { useState } from "react";
import styled from "styled-components";



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

const TravelCourse = () => {

    return (
        <>
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
                <div className="course_wrap">
                    <h4>[여행 일정 코스 - Day-1]</h4>
                        <div className="wrapper">
                            <div style={{display:"flex" }} className="pic1">
                                <p>지도</p>
                                <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5c35ed09-d648-432b-9b25-e04f96add4e9" alt="코스1" />
                            </div>
                            <div style={{display:"block"}}>
                                <b>내용</b>
                            </div>
                        </div>
              
                    <h4>[여행 일정 코스 - Day-2]</h4>
                        <div className="wrapper">
                            <div style={{display:"flex" }} className="pic1">
                                <p>지도</p>
                                <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5c35ed09-d648-432b-9b25-e04f96add4e9" alt="코스1" />
                            </div>
                            <div style={{display:"block"}}>
                                <b>내용</b>
                            </div>
                        </div>

                    <h4>[여행 일정 코스 - Day-3]</h4>
                    <div className="wrapper">
                        <div style={{display:"flex" }} className="pic1">
                            <p>지도</p>
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5c35ed09-d648-432b-9b25-e04f96add4e9" alt="코스1" />
                        </div>
                        <div style={{display:"block"}}>
                            <b>내용</b>
                        </div>
                    </div>
                    </div>
            </TavelCs>
        </Course>
        </>
    );
};

export default TravelCourse;