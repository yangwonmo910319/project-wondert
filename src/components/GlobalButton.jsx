import styled,{ css } from "styled-components";
import { useState } from "react";

const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
  height: 40px;
  border-radius: 50px;
  border: 2px solid #909090 ;
  cursor: pointer;
  background-color: white;
  // 토글내 버튼 색 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
`;

const Circle = styled.div`
  background-color: #F4CE14;
  width: 200px;
  height: 30px;
  border-radius: 50px;
  position: absolute;
  left: 1%;
  transition: all 0.8s ease;
  ${(props) =>
    props.toggle && css`
      transform: translate(190px, 0);
      transition: all 0.5s ease;
    `}
`;

const BtnText=styled.div`
    display: inline;
    position: absolute;
    z-index: 10;
    left: ${(props) => (!props.Text ? "80px" : "280px")};
    display: inline;
    color: ${(props) => (!props.toggle ? "white" : "#3f3f3f")};
    font-size: 15px;
    font-weight: bold;
`;

 const GlobalButton=()=> {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
 	<>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <BtnText toggle={!toggle}>국 내</BtnText>
        <BtnText Text={true} toggle={toggle}>해 외</BtnText>
        <Circle toggle={toggle} />
      </ToggleBtn>
      {/*<h3>Toggle Switch {!toggle ? "OFF" : "ON"}</h3> on off 기능 */}

    </>
  );
}


export default GlobalButton;