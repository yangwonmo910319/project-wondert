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
    background-color: ${(props) => (!props.Buttonstlye ? "#F4CE14" : "#495E57")};
    color : ${(props) => (!props.Buttonstlye ? "black" : "white")};
    border: ${(props) => (!props.Buttonstlye ? "0" : "0")};;
    font-size: 12px;
    font-weight: bold; 
    cursor: pointer;
`

const Goodsclt1=()=>{
    const navigate =useNavigate();

    const today = new Date(),
    priceDate = today.getFullYear() + '년' + (today.getMonth() + 1) + '월' + today.getDate() + '일';
    const date11 =new Date(window.localStorage.getItem("date")),
    oderDate1 = date11.getFullYear() + '년' + (date11.getMonth() + 1) + '월' + date11.getDate() + '일';
    const date12 =new Date(date11.setDate(date11.getDate() + Number(window.localStorage.getItem("select")))),
    oderDate2 = date12.getFullYear() + '년' + (date12.getMonth() + 1) + '월' + date12.getDate() + '일';

    const person1 = window.localStorage.getItem("person");
    const title1 = window.localStorage.getItem("title");
    const price1 =window.localStorage.getItem("price").toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    

    return(
        <>
        <TitleBox>
            <h1>결제가 완료되었습니다.</h1>
            <h3> 빠른 시간 내에 담당 직원이 연락 드리겠습니다.</h3>
        </TitleBox>
        <TitleBox1>
            <h1><h2>결제수단</h2><h3>무통장 입금</h3></h1>
            <h1><h2>입금하실 금액 / 계좌번호</h2><h3>{price1}원 / 국민은행 ( 110-223-44444-23 ) </h3></h1>
            <h1><h2>입금마감시간</h2><h3>{priceDate}  (24:00) 까지</h3></h1>
        </TitleBox1>
        <TitleBox1 style={{borderBottom:"2px solid grey"}}>
            <h1><h2>예약정보</h2><h3>{title1} ({person1})명</h3></h1>
            <h1><h2>여행일자</h2><h3>{oderDate1} ~ {oderDate2}</h3></h1>
            <h1><h2>결제금액</h2><h3>{price1}원</h3></h1>
        </TitleBox1>
        <QrcodeImg />
        <div>
        <SellButton Buttonstlye={false} onClick={()=>navigate("/")}>홈으로</SellButton>
        <SellButton Buttonstlye={true}>장바구니</SellButton>
        </div>
        </>
    )
}

export default Goodsclt1;