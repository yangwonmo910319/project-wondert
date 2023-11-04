import styled, {css} from "styled-components";
import Goodsbox from "./Goodsbox";

const TitleBox=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    h1{
        font-size: 30px;
        font-weight: bold;
        padding: 20px;
    }
    h3{
        padding: 15px;
        font-size: 12px;
        font-weight: bold;
        color:gray;
    }
`;

const ItemBox=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 800px;
    height: 200px;
    border: 1px solid grey;
    border-radius: 10px;
    .itemInfo{
        width: 500px;
        height: 150px;
        margin-left: 20px ;
        
    }
    h3{
        font-size: 14px;
        padding-bottom:5px ;
    }
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    h2{
        display: flex;
        flex-direction: column-reverse;
        height:80px;
        font-size: 24px;
        font-weight: bold;
    }

`;

const ItemImg=styled.img`
    width: 200px;
    height: 200px;
    border-radius: 10px 0  0 10px;
    object-fit: cover;
`;

const Goodssell1 =()=>{

    return(
        <>
        <TitleBox>
            <h1>상품 예약하기</h1>
            <h3>예약하시면 빠른 시간 내에 담당 직원이 연락 드리겠습니다.</h3>
        </TitleBox>
        <ItemBox>
        <ItemImg src="https://i.namu.wiki/i/hXzUfUO0XBHScGhvc9Llg5AZqO-_0sOW1EkLb1qX2yDqQb2mQh3jik3ckZ9xaHobjE-audKIfZM7BK_kyE8i1A.webp" alt="상품사진" />
        <div className="itemInfo"><h3>상품 코드</h3><h1>ITEM21321321</h1><br /><h2>상품명입니다!상품명입니다!</h2></div>
        </ItemBox>

        </>
    )

}


export default Goodssell1;