import styled, { css } from "styled-components";

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  height: 700px;
  .SelectBoxImg1 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border: 5px solid #45474b;
    margin: 5px;

    .img1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 520px;
      background-image: url("https://i.pinimg.com/474x/60/c8/63/60c863c4f3f051fab8e6bd5bb19cd107.jpg");
      background-size: cover;
      border: 5px solid #45474b;
    }

    .Click {
      display: flex;
      justify-content: center;
      font-size: 20px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
  .SelectBoxImg2 {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border: 5px solid #45474b;
    margin: 5px;

    .img2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 500px;
      height: 520px;
      background-image: url("https://i.pinimg.com/474x/0a/3b/22/0a3b225e36ed66c94d0f0cb93e681893.jpg");
      background-size: cover;
      border: 5px solid #45474b;
    }
    .Click {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
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
        <div className="img1"></div>
        <div className="Click">해외 추천 코스</div>
      </div>
      <div className="SelectBoxImg2">
        <div className="img2"></div>
        <div className="Click">국내 추천 코스</div>
      </div>
    </SelectBox>
  );
};

export default CourseSelect;
