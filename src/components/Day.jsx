import React from "react";
import styled from "styled-components";

const DDay = styled.div`
    margin: 20px 30px;
    clear: both;
`;

const Day = () => {
    return (
        <DDay>
            <div>
                Day-"" 
                {/* Day에 {} 넣고 숫자 올라가게 하기 */}
            </div>
        </DDay>
    );
};

export default Day;