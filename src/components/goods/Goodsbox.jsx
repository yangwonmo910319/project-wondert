import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";



const GoodsContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
  background-color: white;
  min-width: 1200px;
  height: 240px;
  border: 2px solid grey;
  border-radius: 4px;
  &+&{
    margin-top: 20px;
  }
`;

const Image = styled.img`
  margin-left: 20px;
  width: 300px;
  height: 200px;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Libya_5230_Wan_Caza_Dunes_Luca_Galuzzi_2007.jpg/800px-Libya_5230_Wan_Caza_Dunes_Luca_Galuzzi_2007.jpg);
  object-fit: cover;
`;

const Title = styled.div`
  width: 55%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  .Titles {
    font-size: 30px;
    padding: 30px 0px;
    font-weight: bold;
  }
  .Info1 {
    padding: 10px 0px;
    font-size: 16px;
    color: gray;
  }
  .Info2 {
    padding: 6px 0px;
    font-size: 16px;
  }
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Button = styled.button`
  background-color: #0a0a23;
  color: #fff;
  border: none;
  padding: 13px;
  min-height: 30px;
  min-width: 120px;
  cursor: pointer;
`;
const Price = styled.div`
  padding-bottom: 90px;
  font-size: 26px;
  font-weight: bold;
`;
const ItemCode = styled.div`
  padding: 10px;
  font-size: 18px;
`;

const Goodsbox = () => {
  const [worlds,setWorlds] =useState("korea");
  const [GoodsList, setGoodsList] = useState("");
  
  useEffect(()=>{
    const GoodsList = async ()=>{
    try{
        const resp = await AxiosApi.goodsList(worlds); //전체 조회
        if(resp.status === 200) setGoodsList(resp.data);
        console.log(resp.data);
    }catch(e){
        console.log(e);
    }};
    GoodsList();
},[worlds]);

  return (
  <>
    {GoodsList &&
      GoodsList.map(data => (
    <GoodsContainer>
      <Image />
      <Title>
        <h1 className="Titles">{data.title}</h1>
        <p className="Info1">{data.info1}</p>
        <p className="Info2">{data.info2}</p>
        <br/>
        <p className="Info2">🎫 출발 일정 : {Number(data.i_date_num)-1}박{data.datenum}일 </p>
        <p className="Info2">
          🛫 여행 기간 : {data.date} ~ {data.date}
        </p>
      </Title>
      <PriceBox>
        <ItemCode>상품번호  {data.item_num} </ItemCode>
        <Price>{data.price}원</Price>
        <Button>자세히보기 〉〉</Button>
      </PriceBox>
    </GoodsContainer>
      ))}
  </>)
};

export default Goodsbox;
