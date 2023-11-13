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
  const [onselect2, setOnselect2] = useState("ALL");
  const onselect = (sel) => {
    setOnselect1(sel);
  };
  const aeraSelect = (sel1) => {
    setOnselect2(sel1);
  };
  const onselect3 = () => {
    setOnselect2("ALL");
  };

  return (
    <>
      <Center style={{ justifyContent: "end", alignItems: "row" }}>
        <GlobalButton onselect={onselect} onselect3={onselect3} />
        <p>선택된 값 : {onselect1} {onselect2}</p>
      </Center>
      <Center>
        <ImgSlide worlds={onselect1} aeraSelect={aeraSelect}/>
      </Center>
      <Center>
        <Goodsbox worlds={onselect1} aeraSelect={onselect2} />
      </Center>
    </>
  );
};

export default Goods;
