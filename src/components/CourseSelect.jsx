import styled, { css } from "styled-components";

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 900px;
  .SelectBoxImg1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.pinimg.com/474x/60/c8/63/60c863c4f3f051fab8e6bd5bb19cd107.jpg");
    background-size: cover;
    width: 50%;
    height: 100%;
    .Click {
      color: #f5f7f8;
      font-size: 60px;
      opacity: 0;
      padding: 50%;
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
  .SelectBoxImg2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://i.pinimg.com/474x/3a/4a/39/3a4a39b6120153f79315ac8b17e18554.jpg");
    background-size: cover;
    width: 50%;
    height: 100%;

    .Click {
      color: #f5f7f8;
      font-size: 60px;
      opacity: 0;
      padding: 50%;
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      opacity: 0.8;
    }
  }
`;

const CourseSelect = () => {
  return (
    <SelectBox>
      <div className="SelectBoxImg1">
        <div className="Click">Click!</div>
      </div>
      <div className="SelectBoxImg2">
        <div className="Click">Click!</div>
      </div>
    </SelectBox>
  );
};

export default CourseSelect;
