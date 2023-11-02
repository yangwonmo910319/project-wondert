import React from "react-router-dom";
import styled from "styled-components";

const Diary33 = styled.div`
    line-height: 50px;
    float: left;
    margin: 0 30px;

    input {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 350px;
        line-height: 30px;
    }
`;

const Diary3 = () => {
    return (
        <Diary33>
            Day-1 : 
            <input type="text" placeholder="일정 작성란"/>
            Day-2 : 
            <input type="text" placeholder="일정 작성란"/>
        </Diary33>
    );
};

export default Diary3;