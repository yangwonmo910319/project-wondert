import styled from "styled-components";

const SelectBox = styled.div`
  display: flex;
  align-content: center;
  color: #f5f7f8;
`;
// 이미지 나중에 넣을거, 글씨 위치 조정해야함 (text-align 안먹음)
const SelectBoxImg1 = styled.div`
  display: flex;
  align-items: center;
  background-image: url("https://lh5.googleusercontent.com/p/AF1QipPV3Q0u6LNGwz6G02aFjIgrpuALe7V3QsPZGBEI=w540-h312-n-k-no");
  background-size: cover;
  width: 100%;
  height: 80vh;
  border: 1px solid black;
  &:hover {
    background: #45474b;
  }
`;
const SelectBoxImg2 = styled.div`
  display: flex;
  align-items: center;
  background-image: url("https://www.futurekorea.co.kr/news/photo/201804/105779_104850_5953.jpg");
  background-size: cover;
  width: 100%;
  height: 80vh;
  border: 1px solid black;
  &:hover {
    background: #45474b;
  }
`;
// 사진 넣으면 click으로 바꾸고 누르는 효과 주고 싶음
const CourseSelect = () => {
  return (
    <SelectBox>
      <SelectBoxImg1>
        <h1>국내</h1>
      </SelectBoxImg1>
      <SelectBoxImg2>
        <h1>해외</h1>
      </SelectBoxImg2>
    </SelectBox>
  );
};

export default CourseSelect;
