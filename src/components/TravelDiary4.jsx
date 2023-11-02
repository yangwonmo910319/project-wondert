import React from "react-router-dom";
import styled from "styled-components";

const Diary44 = styled.div`
    float: right;
    margin: 0 30px;

    input {
        width: 345px;
        height: 200px;
    }
`;

const Diary4 = () => {
    return (
        <Diary44>
            <input type="text" placeholder="후기 글 작성란입니다 :)"/>
        </Diary44>
    );
};

export default Diary4;