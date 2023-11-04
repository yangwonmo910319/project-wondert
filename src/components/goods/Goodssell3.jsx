import styled,{css} from "styled-components";

const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 50px;
    margin-top: 50px;
    border-bottom: 2px solid grey;
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
`;

const SellTable=styled.table`
   
    width: 800px;
    border: 1px solid #444444;

  td {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 50px;
    border: 1px solid #444444;
  }


`;





const Goodssell3=()=>{


    return(
        <>
        <TitleBox>
        <h1>예약 정보</h1>
        </TitleBox>
        <SellTable>
            <tr>
                <td>상품명</td>
                <td>상품명 입니다!!!</td>
            </tr>
            <tr>
                <td>첫번째 칸</td>
                <td>두번째 칸</td>
            </tr>
        </SellTable>
        </>
    )
};


export default Goodssell3;