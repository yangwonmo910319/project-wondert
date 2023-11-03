import styled from "styled-components";

const SelectBox = styled.div`
  display: flex;

  .SelectBoxImg1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://lh5.googleusercontent.com/p/AF1QipPV3Q0u6LNGwz6G02aFjIgrpuALe7V3QsPZGBEI=w540-h312-n-k-no");
    background-size: cover;
    width: 100%;
    height: 80vh;
    .Click {
      color: white;
      font-size: 60px;
      opacity: 0;
      padding: 50%;
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      opacity: 0.5;
    }
  }
  .SelectBoxImg2 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://www.futurekorea.co.kr/news/photo/201804/105779_104850_5953.jpg");
    background-size: cover;
    width: 100%;
    height: 80vh;
    .Click {
      color: white;
      font-size: 60px;
      opacity: 0;
      padding: 50%;
      &:hover {
        opacity: 1;
      }
    }
    &:hover {
      opacity: 0.5;
    }
  }
`;

const CourseSelect = () => {
  return (
    <SelectBox>
      <div className="SelectBoxImg1">
        <div className="Click">Click</div>
      </div>
      <div className="SelectBoxImg2">
        <div className="Click">Click</div>
      </div>
    </SelectBox>
  );
};

export default CourseSelect;
