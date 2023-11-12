import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import { useNavigate } from "react-router-dom";
import Modal from "../../utill/Modal";

const GoodsContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
  background-color: white;
  width: 1100px;
  height: 240px;
  border: 2px solid #45474B;
  border-radius: 4px;
  & + & {
    margin-top: 20px;
  }
`;

const Image = styled.img`
  margin-left: 20px;
  width: 300px;
  height: 200px;
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
    color: #45474B;
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
  background-color: #F4CE14;
  color:  #45474B;
  border: none;
  padding: 13px;
  min-height: 30px;
  min-width: 120px;
  cursor: pointer;
  font-weight: bold;
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

const Goodsbox = ({ worlds, aeraSelect }) => {
  const navigate = useNavigate();
  const [goodsList, setGoodsList] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const GoodsList = async () => {
      try {
        console.log(aeraSelect);
        const resp = await AxiosApi.goodsList(worlds, aeraSelect); //전체 조회
        if (resp.status === 200) setGoodsList(resp.data);
        console.log(resp.data);
      } catch (e) {
        console.log(e);
        setModalOpen(true);
      }
    };
    GoodsList();
  }, [worlds, aeraSelect]);

  const InfoClick = async (itemcode) => {
    window.localStorage.setItem("itemcode", itemcode);
    const res = await AxiosApi.GoodsHit(itemcode);
    if (res.data === true) {
      navigate("/Goods/info");
    } else {
      setModalOpen(true);
    }
  };

  return (
    <>
      {goodsList &&
        goodsList.map((data, index) => (
          <GoodsContainer key={index}>
            <Image src={data.i_main_img} />
            <Title>
              <h1 className="Titles">{data.title}</h1>
              <p className="Info1">{data.oder_re}</p>
              <p className="Info2">{data.oder_info}</p>
              <br />
              <p className="Info2">
                🎫 출발 일정 : {Number(data.i_date_num) - 1}박{data.datenum}일{" "}
              </p>
              <p className="Info2">🛫 여행 시작 일정 : {data.i_date}</p>
            </Title>
            <PriceBox>
              <ItemCode>상품번호 {data.item_num} </ItemCode>
              <Price>{data.price}원</Price>
              <Button onClick={() => InfoClick(data.item_num)}>
                자세히보기 〉〉
              </Button>
            </PriceBox>
          </GoodsContainer>
        ))}
      <Modal open={modalOpen} close={closeModal} header="오류">
        네트워크 에러입니다.
      </Modal>
    </>
  );
};

export default Goodsbox;
