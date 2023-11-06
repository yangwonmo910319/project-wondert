import styled, { css } from "styled-components";

const SelectBox1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 10px;
  .SelectBoxImg1 {
    .img1 {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 200px;
      height: 200px;
      background-image: url("https://i.pinimg.com/474x/60/c8/63/60c863c4f3f051fab8e6bd5bb19cd107.jpg");
      background-size: cover;
      border-radius: 50%;
      margin: 10px;
    }
    .Click {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      opacity: 0.8;
    }
  }
  .SelectBoxImg2 {
    .img2 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 200px;
      background-image: url("https://i.pinimg.com/474x/0a/3b/22/0a3b225e36ed66c94d0f0cb93e681893.jpg");
      background-size: cover;
      border-radius: 50%;
      margin: 10px;
    }
    .Click {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

const CourseSelectCopy = () => {
  return (
    <>
      <SelectBox1>
        <div className="SelectBoxImg1">
          <div className="img1"></div>
          <div className="Click">해외 1</div>
        </div>
        <div className="SelectBoxImg2">
          <div className="img2"></div>
          <div className="Click">해외 2</div>
        </div>
        <div className="SelectBoxImg1">
          <div className="img1"></div>
          <div className="Click">해외 3</div>
        </div>
        <div className="SelectBoxImg2">
          <div className="img2"></div>
          <div className="Click">해외 4</div>
        </div>
        <div className="SelectBoxImg1">
          <div className="img1"></div>
          <div className="Click">해외 5</div>
        </div>
      </SelectBox1>
      <SelectBox1>
        <div className="SelectBoxImg1">
          <div className="img1"></div>
          <div className="Click">국내 1</div>
        </div>
        <div className="SelectBoxImg2">
          <div className="img2"></div>
          <div className="Click">국내 2</div>
        </div>
        <div className="SelectBoxImg1">
          <div className="img1"></div>
          <div className="Click">국내 3</div>
        </div>
        <div className="SelectBoxImg2">
          <div className="img2"></div>
          <div className="Click">국내 4</div>
        </div>
        <div className="SelectBoxImg1">
          <div className="img1"></div>
          <div className="Click">국내 5</div>
        </div>
      </SelectBox1>
    </>
  );
};

export default CourseSelectCopy;
