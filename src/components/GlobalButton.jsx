import styled,{ css } from "styled-components";
import { useState } from "react";

const ToggleBtn = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (!props.toggle ? "gray" : "rgb(51,30,190)")};
  // 토글내 버튼 색 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;

const Circle = styled.div`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
  ${(props) =>
    props.toggle && css`
      transform: translate(140px, 0);
      transition: all 0.5s ease-in-out;
    `}
`;

 const GlobalButton=()=> {
  const [toggle, setToggle] = useState(false);
  const clickedToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
 	<>
      <h3>국내</h3>
      <ToggleBtn onClick={clickedToggle} toggle={toggle}>
        <Circle toggle={toggle} />
      </ToggleBtn>
      {/*<h3>Toggle Switch {!toggle ? "OFF" : "ON"}</h3> on off 기능 */}
      <h3>해외</h3>

    </>
  );
}


export default GlobalButton;