import React from "react";
import styled from "styled-components";

const Travel1 = styled.div`
    display: block;
    margin: 0 30px;
    
    input {
        margin: 10px;
    }

`;

const Select = () => {
    return (
        <Travel1>
            <h3>1. 여행할 나라 선택</h3>
            <div>
                <input type="radio" name="world"/>
                <label htmlFor="#">국내</label>
                <input type="radio" name="world"/>
                <label htmlFor="#">해외</label>
            </div>
        </Travel1>
    );
};

export default Select;