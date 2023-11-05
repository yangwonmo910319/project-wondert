import styled, { css } from "styled-components";

const basketCss = styled.button`
  color: red;
`;
const Basket = () => {
  return (
    <>
      <basketCss>
        <h1>바스켓</h1>
      </basketCss>
    </>
  );
};

export default Basket;
