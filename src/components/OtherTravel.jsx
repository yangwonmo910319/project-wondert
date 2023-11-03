import React from "react";
import styled from "styled-components";

const Button1 = styled.div`
   display: flex;
   justify-content: space-between;
   margin: 0 30px;

   label {
    margin: 10px;
   }
`; 

const OtherSelect = () => {
    return (
        <Button1>
            <div>
                <label htmlFor="#">기타 여행</label>
                <input type="text" placeholder="원하는 테마를 입력해주세요."/>
                <button>선택</button>
            </div>
            <div>
                <button>선택 완료</button>
            </div>
        </Button1>
    );
};

export default OtherSelect;