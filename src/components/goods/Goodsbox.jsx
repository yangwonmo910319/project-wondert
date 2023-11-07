import styled, { css } from "styled-components";




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
  const data = [
    {title:"타이틀입니다1111",
    info1 :"설명111",
    info2 : "설명222",
    datenum : 3,
    date : "2023-12-12",
    codenum :1,
    price : 46000,
    },
    {title:"타이틀입니다22222",
    info1 :"설명111",
    info2 : "설명222",
    datenum : 3,
    date : 2023-12-12,
    codenum :1,
    price : 46000,
    },
    {title:"타이틀입니다33333",
    info1 :"설명111",
    info2 : "설명222",
    datenum : 3,
    date : 2023-12-12,
    codenum :1,
    price : 46000,
    },
    {title:"타이틀입니다444444",
    info1 :"설명111",
    info2 : "설명222",
    datenum : 3,
    date : 2023-12-12,
    codenum :1,
    price : 46000,
    },
    {title:"타이틀입니다55555",
    info1 :"설명111",
    info2 : "설명222",
    datenum : 3,
    date : 2023-12-12,
    codenum :1,
    price : 46000,
    },

  ]

  


  return (
  <>
    {data &&
      data.map(data => (
    <GoodsContainer>
      <Image />
      <Title>
        <h1 className="Titles">{data.title}</h1>
        <p className="Info1">{data.info1}</p>
        <p className="Info2">{data.info2}</p>
        <br/>
        <p className="Info2">🎫 출발 일정 : {Number(data.datenum)-1}박{data.datenum}일 </p>
        <p className="Info2">
          🛫 여행 기간 : {data.date} ~ {data.date}
        </p>
      </Title>
      <PriceBox>
        <ItemCode>상품번호  {data.codenum} </ItemCode>
        <Price>{data.price}원</Price>
        <Button>자세히보기 〉〉</Button>
      </PriceBox>
    </GoodsContainer>
      ))}
  </>)
};

export default Goodsbox;
