import styled,{ css } from "styled-components";

const Tag =styled.div`
    display: flex;
    align-items: start;
    width: 200px;
    font-weight: bold;
    background-color: black;
    color: white;
    border-radius: 20px;
    padding: 1px 5px;
`;

const TitleBox=styled.div`
    display: flex;

    flex-direction: column;
    align-items: start;
    width: 1200px;
    min-height: 80px;
    border-bottom: 2px solid black;

`;

const Goodstitle = ()=>{


    return(
        <>
        <TitleBox>
        <Tag># 혼자여행하기 너무 좋은</Tag>
            <h1>상품 타이틀 입니다 상품 타이틀 입니다상품 타이틀 입니다!!!</h1>
        </TitleBox>
        </>
    )
};



export default Goodstitle;