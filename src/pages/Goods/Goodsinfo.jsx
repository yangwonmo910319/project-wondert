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

const Goodsinfo = ({ itemCode }) => {
  const [goodsInfo, setGoodsInfo] = useState("");

  useEffect(() => {
    const GoodsInfo = async () => {
      try {
        const resp = await AxiosApi.goodsInfo(itemCode); //전체 조회

        if (resp.status === 200) setGoodsInfo(resp.data[0]);

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
            <Goodsimgslide />
            <Goodsinfo1 />
            <Goodsinfoheader />
            <Goodsinfos />
          </div>
          <div>
            <Goodsprice />
          </div>
        </Between>
      </Center>
    </>
  );
};

export default Goodsinfo;
