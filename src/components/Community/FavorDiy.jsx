import styled, { css } from "styled-components";
import FavorDiyitem from "./FavorDiyitem";
import { useState } from "react";

const FavorDiyCss = styled.div`
margin-left: -100px;
margin-top: 50px;
height: auto;
  .memo {
    width: 95%;
    font-size: 25px;
    border-bottom: 5px solid rgba(72, 100, 224, 1);
    display: flex; 

  }
`;

const FavorDiy = () => {

  return (
    <>
       <FavorDiyCss>
        <div className="memo">
          <h3>DIY 여행일지</h3>        
        </div>
        <div className="itetm">
          <FavorDiyitem ></FavorDiyitem>
        </div>

        </FavorDiyCss>
    </>
  );
};

export default FavorDiy;
