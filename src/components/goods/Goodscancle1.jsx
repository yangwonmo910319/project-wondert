import styled,{ css } from "styled-components";

const Container=styled.div`
    width: 1000px;
    height: 280px;
    h1{
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 24px;
        width: 500px;
        height: 100px;
        padding-left: 2%;
        font-weight: bold;
    }
    h2{
        display: flex;
        align-items: center;
        justify-content: start;
        font-size: 15px;
        width: 200px;
        font-weight: bold;
        padding-left: 1%;
    }
    .canclelist{
            width: 670px;
            font-size: 12px;
            align-items: center;    
            padding: 1% 2%;
            li{
                padding: 5px 0;
                list-style: square;
            }
        }
    .cancleInfoBox{
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 1000px;
        height: 160px;
        background-color: #F4CE14;
    }
`;

const SellTable=styled.table`
    width: 100%;
    border: 1px solid #c1c1c1;

    tr{
        display: flex;
    flex-direction: row;
    }

th{
    display: flex;
    justify-content: center;
    width: 10%;
    align-items: center;
    justify-content: center;
    height: 30px;
    border: 1px solid #c9aa0f;
    font-size: 13px;
    font-weight: bold;
    background-color: #F4CE14;
}
`;

const SellTable1=styled.table`
    width: 1000px;
    tr{
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #c1c1c1;
        border-radius: 10px;
    }

    th{
        display: flex;
        justify-content: center;
        width: 10%;
        align-items: center;
        justify-content: center;
        height: 30px;
        font-size: 10px;
        font-weight: bold;
    }
`;

const ScroolBox=styled.div`
    height: 300px;
    width: 1000px;
    overflow: auto;
    position: relative;
    overflow-y: scroll;
    border: 1px solid #F4CE14;
    .innerStyle {
      width: 1000px;
      height: 650px;
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
const CancleButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f47114;

    width: 50px;
    height: 25px;
    cursor: pointer;
`;



const Goodscancle1=()=>{

    return(
        <>
        <Container>
            <h1>주문 결제 내역 ( 확인 / 취소 )</h1>
            <div className="cancleInfoBox">
            <h2>※취소시 주의사항※</h2>
            <ul className="canclelist">
                <li>※ 결항된 항공권은 탑승일/탑승시간이 지나도 전액 환불처리가 가능합니다.</li>
                <li>※ 결항을 예상하고 항공권을 사전에 취소할 경우 취소수수료가 부과되오니 결항 확정시 안내에 따라 취소하여 주시기 바랍니다.</li>
                <li>※ 마이페이지에서 [취소/환불]된 경우, 자동으로 수수료가 부과되며 부과된 수수료는 환불이 불가합니다.</li>
                <li>반드시 온라인변경신청 또는 고객센터를 통해 요청해 주시기 바랍니다.</li>
            </ul>
            </div>
        </Container>
        <Container>
            <SellTable>
                <tr>
                    <th>일정</th>
                    <th style={{width: "40%"}}>상품명</th>
                    <th>기간</th>
                    <th>인원</th>
                    <th>금액</th>
                    <th>총 합계</th>
                    <th>취소요청</th>
                </tr>
            </SellTable>
            <ScroolBox >
                <div className="innerStyle">
                <SellTable1>
                <tr>
                    <th>일정</th>
                    <th style={{width: "40%",justifyContent:"start", paddingLeft:"1%"}}>#ONLY교원투어#담당자추천[⭐빛나는 베니스⭐] 겨울에 만나는, 이탈리아 일주 9일#베니스1DAY,</th>
                    <th>기간</th>
                    <th>인원</th>
                    <th>금액</th>
                    <th>총 합계</th>
                    <th><CancleButton>요청</CancleButton></th>
                </tr>
                </SellTable1>
                </div>
            </ScroolBox>
            <div style={{display:"flex",alignContent:"center",justifyContent:"center"}}>
            <SellButton Buttonstlye={true}>장바구니</SellButton>
            <SellButton Buttonstlye={true}>홈으로</SellButton>
            </div>
        </Container>

        </>
    )
};

export default Goodscancle1;
