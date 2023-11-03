import styled,{ css } from "styled-components";

const TitleBox=styled.div`
    display: flex;
    padding: 10px 0;
    flex-direction: column;
    align-items: start;
    width: 1200px;
    min-height: 80px;
    border-bottom: 2px solid black;
    .tag{
        display: flex;
        align-items: start;
        width: 200px;
        font-weight: bold;
        background-color: black;
        color: white;
        border-radius: 20px;
        padding: 10px 5px;
    }

    .title{
        padding: 20px 0;
        font-size: 28px;
        font-weight: bold;
    }

`;

const Goodstitle = ()=>{


    return(
        <>
        <TitleBox>
        <div className="tag"># 혼자여행하기 너무 좋은</div>
            <p className="title">상품 타이틀 입니다 상품 타이틀 입니다상품 타이틀 입니다!!!</p>
        </TitleBox>
        </>
    )
};



export default Goodstitle;