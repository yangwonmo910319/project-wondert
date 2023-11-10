/*인천 페이지 */
import styled, { css } from "styled-components";
import GlobalButton from "../../components/GlobalButton";
import Goodsbox from "../../components/goods/Goodsbox";
import ImgSlide from "../../components/goods/imgslide";
import { useState, useCallback } from "react";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
`;
const Between = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Goods = () => {
  const [onselect1, setOnselect1] = useState("korea");
  const onselect = (sel) => {
    setOnselect1(sel);
  };

  return (
    <>
      <Center style={{ justifyContent: "end", alignItems: "row" }}>
        <GlobalButton onselect={onselect} />
        <p>선택된 값 : {onselect1}</p>
      </Center>
      <Center>
        <ImgSlide />
      </Center>
      <Center>
        <Goodsbox worlds={onselect1} />
      </Center>
    </>
  );
};

export default Goods;
