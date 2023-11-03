import React from "react";
import styled from "styled-components";

const WriteTravel = styled.div`
    border: 1px solid black;
    margin: 0 30px;
    line-height: 40px;

    input {
        width: 500px;
    }

    div {
        margin: 15px;
    }
`;

const Write = () => {
    return(
        <WriteTravel>
        <div>
            <label htmlFor="#">제목 : </label>
            <input type="text"/>
        </div>
        <div>
            국내/해외 - 지역이름
        </div>
        <div>
             여행날짜 : {/*{date}; */}
        </div>
        <div>
            1인 맞춤 선택한 것 나오게 
        </div>
        </WriteTravel>
    );
};

export default Write;