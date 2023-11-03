import styled, { css } from "styled-components";




const GoodsContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
  background-color: white;
  min-width: 1200px;
  height: 240px;
  border: 2px solid black;
  border-radius: 4px;
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
  }
  .Info1 {
    margin: 0;
    font-size: 16px;
    color: gray;
  }
  .Info2 {
    margin: 0;
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
  margin-bottom: 100px;
  font-size: 26px;
  font-weight: bold;
`;
const ItemCode = styled.div`
  margin: 10px;
`;

const Goodsbox = () => {
  return (
    <GoodsContainer>
      <Image />
      <Title>
        <h1 className="Titles">타이틀입니다타이틀입니다타이틀입니다</h1>
        <p className="Info1">설명1설명1설명1설명1설명1설명1설명1설명1설명1</p>
        <p className="Info2">
          설명2설명2설명2설명2설명2설명2설명2설명2설명2설명2설명2설명2설명2설명2설명2
        </p>
        <br />
        <p className="Info2">🎫 출발 일정 : 4일 </p>
        <p className="Info2">
          🛫 여행 기간 : 2023년 11월 16일 ~ 2023년 11월 20일
        </p>
      </Title>
      <PriceBox>
        <ItemCode>상품번호  S20231101 </ItemCode>
        <Price>50,000원</Price>
        <Button>자세히보기 〉〉</Button>
      </PriceBox>
    </GoodsContainer>
  );
};

export default Goodsbox;
