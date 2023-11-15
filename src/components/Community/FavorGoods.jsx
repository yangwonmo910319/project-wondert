import styled, { css } from "styled-components";
import FavorGoodsItem from "./FavorGoodsItem";
import { useState } from "react";

const FavorCourseCss = styled.div`
margin-left: -100px;
margin-top: 50px;
  .memo {
    width: 95%;
    font-size: 25px;
    border-bottom: 5px solid #F4CE14;

  }
`;

const FavorGoods = () => { 
  return (
    <>
       <FavorCourseCss>
        <div className="memo">
          <h3>추천 코스</h3>        
        </div>
        <div className="itetm">
        <FavorGoodsItem ></FavorGoodsItem>
        </div>

        </FavorCourseCss>
    </>
  );
};

export default FavorGoods;
