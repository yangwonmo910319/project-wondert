import React, { useState } from "react";
import styled from "styled-components";

const Travel1 = styled.div`
    display: block;
    margin: 30px 30px;
    input {
        margin: 10px;
    }
`;

const Select = () => {
    
    const SeeClose = () => {
    const [hidden, setHidden] = useState(true);  
    const open = () => {
        
    };
};

    return (
        <Travel1>
            <h3>1. 여행할 나라 선택</h3>
                <div>
                    <input type="radio" name="world"/> 국내
                    <input type="radio" name="world"/> 해외
                </div>

                <div>
                    <h3>1-1 국내 지역 선택하기</h3>
                    <div>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">제주도</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">강원도</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">울릉도</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">전주</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">부산</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">대전</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">안동</label>
                        <input type="radio" name="area"/>
                        <label htmlFor="area">여수</label>

                        <input type="radio" name="area"/>
                        <label htmlFor="area">기타 지역</label>
                        <input type="text"/>
                        <button>입력</button>
                    </div>
                </div>

                <div>
                <h3>1-2 해외 지역 선택하기</h3>
            <div>
                <input type="radio" name="area"/>
                <label htmlFor="area">일본</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">중국</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">태국</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">베트남</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">필리핀</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">대만</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">호주</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">싱가폴</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">코타키나발루</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">인도</label>
                <input type="radio" name="area"/>
                <label htmlFor="area">미국</label>
                <div>
                    <input type="radio" name="area"/>
                    <label htmlFor="#">기타 지역</label>
                    <input type="text"/>
                    <button>입력</button>
                </div>
            </div>
                </div>
        </Travel1>
    );
};

export default Select;