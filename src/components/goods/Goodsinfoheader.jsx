import styled,{css} from "styled-components";
import { useState } from "react";

const HeaderBox =styled.div`
    display: flex;
    width: 800px;
    height: 55px;
    align-items: center;
    justify-content: center;
    .Btn{
        width: 30%;
    height: 55px;
    background-color: white;
    border: 1px solid gray;
    cursor: pointer;
    &:hover{
        border: 1.5px solid black;
    }
    &.active{
        border: 1.5px solid black;
        font-weight: bold;
    }
    }

`;


const Goodsinfoheader=()=>{
    const headerlist = ["상세보기","예약안내사항","상품문의","약관정보","안정정보","선택관광/기타"]
    const [btnActive, setBtnActive] = useState("");
  
    const toggleActive = (e) => {
      setBtnActive((prev) => {
        return e.target.value;
      });
    };

    return(
        <>
        <HeaderBox>

               {headerlist.map((item, idx) => {
                return(
                    <button
                value={idx}
                className={"Btn" + (idx === (btnActive) ? "active" : "")}
                onClick={toggleActive}>
                {item}
                </button>
                )
            })}
        </HeaderBox>
        </>
    )
}

export default Goodsinfoheader;