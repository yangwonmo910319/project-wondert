import React from "react";
import styled from "styled-components";

const Travel3 = styled.div`
    display: block;
    margin: 0 30px;
    
    input {
        margin: 10px;
    }

`;

const Select3 = () => { // 해외 선택할 경우 창 나타나게 하기, 기타 외에 다른거 선택 시 선택 안되게 
    return (
        <Travel3>
            <h3>1-2 해외 지역 선택하기</h3>
            <div>
                <input type="radio" name="area"/>
                <label htmlFor="#">일본</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">중국</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">태국</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">베트남</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">필리핀</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">대만</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">호주</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">싱가폴</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">코타키나발루</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">인도</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">미국</label>
                <div>
                    <input type="radio" name="area"/>
                    <label htmlFor="#">기타 지역</label>
                    <input type="text"/>
                    <button>입력</button>
                </div>
            </div>
        </Travel3>
    );
};

export default Select3;