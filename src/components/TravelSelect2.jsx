import React from "react";
import styled from "styled-components";

const Travel2 = styled.div`
    display: block;
    margin: 0 30px;
    
    input {
        margin: 10px;
    }

`;

const Select2 = () => { // 국내 선택할 경우 나타나게 하기, 기타 외에 다른거 선택 시 선택 안되게 
    return (
        <Travel2>
            <h3>1-1 국내 지역 선택하기</h3>
            <div>
                <input type="radio" name="area"/>
                <label htmlFor="#">제주도</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">강원도</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">울릉도</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">전주</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">부산</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">대전</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">안동</label>
                <input type="radio" name="area"/>
                <label htmlFor="#">여수</label>

                <input type="radio" name="area"/>
                <label htmlFor="#">기타 지역</label>
                <input type="text"/>
                <button>입력</button>
            </div>
        </Travel2>
    );
};

export default Select2;