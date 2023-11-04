import styled,{css} from "styled-components";

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 50px;
    margin-top: 50px;
    border-bottom: 2px solid #c1c1c1;
    h1{
        font-size: 20px;
        font-weight: bold;
    }
    h2{
        display: flex;
        align-items: center;
        padding-top: 20px;  
        font-size: 15px;
        font-weight: bold;
    }
    h3{
        font-size: 12px;
        font-weight: 500;
        padding-left:20px ;
    }

    .title1box1{
            width: 600px;
            height: 40px;
            font-size: 10px;
            align-items: center;
            font-weight: bold;
            padding: 2% 2%;
            li{
                padding: 5px 0;
                list-style:square;
            }
        }
`;

const SellTable=styled.table`
    width: 800px;
    border: 1px solid #c1c1c1;

    tr{
        display: flex;
    flex-direction: row;
    }

th{
    display: flex;
    justify-content: center;
    width: 18%;
    align-items: center;
    justify-content: start;
    padding-left:2% ;
    height: 50px;
    border: 1px solid #c1c1c1;
    font-size: 13px;
    font-weight: bold;
}
  td {
    display: flex;
    width: 78%;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding-left:2% ;
    height: 50px;
    border: 1px solid #c1c1c1;
    font-size: 10px;
    font-weight: bold;
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
`

const Goodssell3=()=>{


    return(
        <>
        <TitleBox>
        <h1>예약 정보</h1>
        </TitleBox>
        <SellTable>
            <tr>
                <th>상품명</th>
                <td>#ONLY교원투어#담당자추천[⭐빛나는 베니스⭐] 겨울에 만나는, 이탈리아 일주 9일#베니스1DAY,낮&밤투어#전일정4성#자유시간보장+명품아울렛#토스카나(피사&아시시)</td>
            </tr>
            <tr>
                <th>여행기간</th>
                <td>2023년 12월 08일 (금) ~ 2023년 12월 16일 (토)</td>
            </tr>
            <tr>
                <th>성인요금</th>
                <td> 1,999,000원 [만 12세 이상] (기본상품가: 1,999,000원,제세공과금 0원)</td>
            </tr>
            <tr>
                <th>아동요금</th>
                <td> 0원 [만 12세 이상] (기본상품가: 1,999,000원,제세공과금 0원)</td>
            </tr>
            <tr>
                <th>유아요금</th>
                <td> 0원 [만 12세 이상] (기본상품가: 1,999,000원,제세공과금 0원)</td>
            </tr>
            <tr>
                <th>최종 결제 요금</th>
                <td>1,999,000원 (기본상품가: 1,999,000원,제세공과금 0원)</td>
            </tr>
        </SellTable>
        <TitleBox style={{height:"200px", marginTop:"0"}}>
            <h2 >취소위약금 및 동의사항</h2>
            <ul className="title1box1">
                <li>결제완료 후 예약확정 시 취소 시점에 따라 위약금이 발생할 수 있습니다.</li>
                <li>취소료 규정은 각 상품 상세 페이지에서 확인 가능합니다.</li>
                <li>예약이 완료되면 담당자가 전화로 추가 안내 및 확인 절차를 거칩니다.</li>
                <li>여행상품의 특성 상 경우에 따라 예약이 완료된 후에도 처리가 불가능할 수 있습니다.</li>
                <li>본 여행상품의 세부 약관 규정은 재경부 고시 소비자 피해보상 규정을 바탕으로 합니다.</li>
            </ul>
        </TitleBox>
            <span>
            <SellButton Buttonstlye={false}>취소하기</SellButton>
            <SellButton Buttonstlye={true}>예약하기</SellButton>
            </span>
        </>
    )
};


export default Goodssell3;