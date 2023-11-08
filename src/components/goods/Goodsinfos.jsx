import styled from "styled-components";
import { useEffect, useState } from "react";

    const Infobox = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .title{
            display: flex;
            width: 800px;
            font-size:20px;
            font-weight: bold;
            padding: 30px 0;
        }
        .title1{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 800px;
            height: 80px;
            border-top: 1px solid black;
            border-bottom: 1px solid gray;
            margin: 0;
            margin-bottom: 50px;
        }
        .title1box{
            display: flex;
            width: 120px;
            height: 50px;
            font-size: 15px;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        .title1box1{
            width: 600px;
            height: 40px;
            font-size: 10px;
            align-items: center;
            font-weight: bold;
            li{
                padding: 5px 0;
                list-style:square;
            }
        }
    `;
    const Infoimg=styled.img`
        width: 800px;
        height: ${(props) =>(!props.toggle ? "200px" : "")};
        object-fit: cover;
    `;
    const InfoimgBtn =styled.button`
        width: 700px; 
        height: 20px;
        border: 0;
        background-color: #0000007b;
        border-radius: 20px;
        position: relative;
        bottom : 10px;
        color : white;
    `;

const Goodsinfos= (props)=>{
    const { info_img } =props;
    const [toggle, setToggle] = useState(false);
    const [open, setOpen] =useState("OPEN"); //이모티콘줘도됨
    const clickedToggle = () => {
        setToggle((prev) => !prev);
        if (open === "OPEN"){
            setOpen("CLOSE");
        }else setOpen("OPEN");
    };

    // switch(num){

    //     case 1:
    return(
        <Infobox>
            <p className="title">상품 상세설명</p>
            <p className="title1">
                <p className="title1box">⚒여행자보험</p>
                <ul className="title1box1">
                    <li>해외 여행자보험(최대1억원/KB손해보험) (단,만80세 이상의 보험은 불포함/만 15세 미만과 만 70~79세는 최대 상해금 5천만원)</li>
                    <li style={{color:"green", textDecoration:"underline"}} >보장내용 및 금액 상세보기</li>
                </ul>
            </p>
            <Infoimg toggle={toggle} src={info_img} alt="상세설명" />
            <InfoimgBtn onClick={clickedToggle}>{open}</InfoimgBtn>
        </Infobox>
    )
    //     case 2:

    //     case 3:

    //     case 4:

    //     case 5:

    //     case 6:

    //     default: return;
    // }

};

export default Goodsinfos;