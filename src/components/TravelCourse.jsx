import React from "react";
import styled from "styled-components";

const Course = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

const TravelTitle = styled.div`
    padding: 0 30px;

    p {
    margin: 20px 15px;
    line-height: 30px;
    }
    h5 {
    font-size: 17px;
    font-weight: bold;
    margin: 10px 300px;
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
    .container {
        display: flex;
        margin: 50px 110px;
    }
    .wrapper {
        display: flex;
        transform: translate3d(-100px,0px,0px);
        transition-duration: 0ms;
        z-index: 1;
    }
    .wrapper img {
        width: 100px;
        height: 100px;
        margin: 0 10px;
    }
    .logg_row {
        transform: translate3d(0px, 0px, 0px) scaleX(0.333333) scaleY(1);
        transition-duration: 300ms;
        top: auto;
        bottom: 25px;
        width: auto;
        left: 15px;
        right: 15px;
        height: 2px;
        background: #fff;
    }
`;

const TravelCourse = () => {
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
                <div className="course_wrap">
                    <h4>[여행 일정 코스 - Day-1]</h4>
                    <div className="container">
                        <div className="wrapper">
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5c35ed09-d648-432b-9b25-e04f96add4e9" alt="코스1" />
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=fbfe9e24-d64e-494c-ab3c-6b11c83a7ef4" alt="코스2" />
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=2085a183-210c-48e1-a61d-44524f7109e7" alt="코스3" />
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=9910f7a5-e84c-4f60-9549-17095a003754" alt="코스4" />
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=b05663e8-f229-4745-93c9-52aea5030fdd" alt="코스5" />
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5c35ed09-d648-432b-9b25-e04f96add4e9" alt="코스6" />
                            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=5c35ed09-d648-432b-9b25-e04f96add4e9" alt="코스7" />
                        </div>
                        <span className="long_row"></span>

                    </div>
                </div>
            </TavelCs>
        </Course>
    );
};

export default TravelCourse;