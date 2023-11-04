import styled, {css} from "styled-components";

//1인 전용 상품 : 예약현황/구분/상품가격 

const Container1 =styled.div`
    display: flex;
    width: 800px;
    align-items: end;
    font-weight: bold;
    justify-content: space-between;
    padding: 15px 0;
    font-size: 14px;
`;

const Container2 =styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    margin-bottom: 10px;
    .onebox{
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: 800px;
        height: 68px;
        border: 1px solid gray;
        border-top: 2px solid black;
        font-size: 16px;
    }
    .twobox{
        display: flex;
        justify-content: space-between;
        align-items:center;
        width: 800px;
        height: 80px;
        border: 1px solid gray;
    }
    .box1{
        display: flex;
        height: 50px;
        width: 80px;
    
        padding: 0 10px;
        font-size: 15px;
        font-weight: bold;
    }
    .box2{
        display: flex;
        align-items: center;
        height: 20px;
        width: 500px;
        padding: 0 10px;
    }
    .box2-1{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        height: 20px;
        width: 160px;
        font-size: 15px;
        font-weight: bold;
    }
    .box2-2{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        height: 50px;
        width: 160px;
        font-size: 10px;
        color: gray;

        span{
            padding-bottom:10px ;
        }
        div{
            padding-bottom:5px ;
        }
    }
`;

const Goodsinfo1 =()=>{
    return(
        <>
        <Container1>
            <span>예약현황 예약 <span style={{color:"red"}}>1</span>명 (남은 좌석<span style={{color:"red"}}> 10</span>석/ 최소출발인원 <span style={{color:"royalblue"}}> 2</span> 명)</span>
            <span style={{color:"gray"}}>담당자 정보 (이모티콘) </span>
        </Container1>
        <Container2>
            <div className="onebox">
                <p className="box1" style={{alignItems:"center"}}>구분</p>
                <p className="box2">
                    <p className="box2-1">성인(만 12세 이상)</p>
                    <p className="box2-1">아동(만 12세 미만)</p>
                    <p className="box2-1">유아(24개월 미만) </p>
                </p>
            </div>
            <div className="twobox">
                <p className="box1">상품 가격</p>
                <p className="box2">
                    <p className="box2-2"><span style={{fontWeight:"bold",fontSize:"20px", color:"black"}}> 10,000,000원 </span><div>유류할증료 포함</div>제세공과금 포함</p>
                    <p className="box2-2"><span style={{fontWeight:"bold",fontSize:"20px", color:"black"}}> 10,000,000원 </span><div>유류할증료 포함</div>제세공과금 포함</p>
                    <p className="box2-2"><span style={{fontWeight:"bold",fontSize:"20px", color:"black"}}> 10,000,000원 </span><div>유류할증료 포함</div>제세공과금 포함</p>
                </p>
            </div>
        </Container2>
        </>
    )
};


export default Goodsinfo1;