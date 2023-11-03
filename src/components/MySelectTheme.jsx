import React from "react";
import styled from "styled-components";

const MyThemeSelect = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    margin: 0 30px;
`;

const MySelect = () => {
    
    return (
        <MyThemeSelect>
            <h2>내가 선택한 테마</h2>
        </MyThemeSelect>
    );
};

export default MySelect;