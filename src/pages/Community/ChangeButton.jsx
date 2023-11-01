/*원모 페이지 */
import styled, { css } from "styled-components";
const Button = styled.button`
  width: 100px;
  height: 100px;
  border: 1px solid blue;
  ${(props) =>
    props.enabled &&
    css`
      background-color: orange;
    `};
  &:hover {
    background-color: #555;
    color: #eee;
  }
  &:active {
    background-color: #0056b3; // 활성화 상태에서의 색상
    border-color: #aaa;
  }
`;

const ChangeButton = () => {
  return <Button onClick={() => {}}>확인</Button>;
};

export default ChangeButton;
