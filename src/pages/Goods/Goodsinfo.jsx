/*인천 페이지 */
import styled, { css } from "styled-components";
import AxiosApi from "../../api/AxiosApi";
import { useState, useEffect } from "react";
import Goodstitle from "../../components/goods/Goodstitle";
import Goodsimgslide from "../../components/goods/Goodsimgslide";
import Goodsinfoheader from "../../components/goods/Goodsinfoheader";
import Goodsinfos from "../../components/goods/Goodsinfos";
import Goodsprice from "../../components/goods/Goodsprice";
import Goodsinfo1 from "../../components/goods/Goodsinfo";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Between = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Goodsinfo = () => {
  const itemCode =window.localStorage.getItem("itemcode")
  const [goodsInfo, setGoodsInfo] = useState("");



  useEffect(() => {
    const GoodsInfo = async () => {
      try {
        const resp = await AxiosApi.goodsInfo(itemCode); //전체 조회
        if (resp.status === 200) setGoodsInfo(resp.data[0])
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    GoodsInfo();
  }, []);




  return (
    <>
      <Center>
        <Goodstitle title={goodsInfo.title} />
      </Center>
      <Center>
        <Between>
          <div>
            <Goodsimgslide img1={goodsInfo.i_sub_img1} img2={goodsInfo.i_sub_img2} img3={goodsInfo.i_sub_img3}/>
            <Goodsinfo1 price ={goodsInfo.price} hit={goodsInfo.i_hit}/>
            <Goodsinfoheader />
            <Goodsinfos info_img={goodsInfo.info_img} />
          </div>
          <div>
            <Goodsprice title={goodsInfo.title} item_num={goodsInfo.item_num} i_date={goodsInfo.i_date} price={goodsInfo.price}/>
          </div>
        </Between>
      </Center>
    </>
  );
};

export default Goodsinfo;
