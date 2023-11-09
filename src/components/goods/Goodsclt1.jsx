import styled from "styled-components";
import  {ReactComponent as QrcodeImg} from "../../images/qr코드.svg";
import { useNavigate } from "react-router-dom";

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
const TitleBox1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 220px;
    border-top: 2px solid grey;
    h1{
        display: flex;
        align-items: center;
        padding: 3% 3%;
    }
    h2{
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: 800;
        width: 30%;
    }
    h3{
        font-size: 12px;
        font-weight: bold;
        padding-left:20px ;
    
    }
`;

const SellButton = styled.button`
    margin: 20px;
    width: 150px;
    height: 40px;
    background-color: ${(props) => (!props.Buttonstlye ? "white" : "black")};
    color : ${(props) => (!props.Buttonstlye ? "black" : "white")};
    border: ${(props) => (!props.Buttonstlye ? "1px solid #c1c1c1;" : "0")};;
    font-size: 12px;
    font-weight: bold; 
    cursor: pointer;
`

const Goodsclt1=()=>{
    const navigate =useNavigate();


    return(
        <>
        <TitleBox>
            <h1>결제가 완료되었습니다.</h1>
            <h3> 빠른 시간 내에 담당 직원이 연락 드리겠습니다.</h3>
        </TitleBox>
        <TitleBox1>
            <h1><h2>결제수단</h2><h3>무통장 입금</h3></h1>
            <h1><h2>입금하실 금액 / 계좌번호</h2><h3>1,200,000원 / 국민은행 ( 110-223-44444-23 ) </h3></h1>
            <h1><h2>입금마감시간</h2><h3>2023년 11월 12일 16시 까지</h3></h1>
        </TitleBox1>
        <TitleBox1 style={{borderBottom:"2px solid grey"}}>
            <h1><h2>예약정보</h2><h3>#ONLY교원투어#담당자추천[⭐빛나는 베니스⭐] 겨울에 만나는, 이탈리아 일주 9일#베니스1DAY</h3></h1>
            <h1><h2>여행날짜</h2><h3>2023년 12월 12일 ~ 2023년 12월 18일</h3></h1>
            <h1><h2>결제금액</h2><h3>1,200,000원</h3></h1>
        </TitleBox1>
        <QrcodeImg />
        <div>
        <SellButton Buttonstlye={true} onClick={()=>navigate("/")}>홈으로</SellButton>
        <SellButton Buttonstlye={true}>장바구니</SellButton>
        </div>
        </>
    )
}

export default Goodsclt1;