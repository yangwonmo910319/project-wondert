import CourseBtn from "./CourseBtn";
import styled from "styled-components";
import CourseItem from "./CourseItem";

// 전체 한박스
const CourseNavbar = styled.div`
  display: flex;
  flex-direction: column;
`;
// 내용(사진, 리스트 4개)
const ListBox = styled.div`
  width: 100%;
  height: 300px;
  border: 2px solid #45474b;
`;
// 슬라이드 자리
const SlidePath = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 500px;
`;
const CourseList = () => {
  return (
    <CourseNavbar>
      <CourseBtn />
      <SlidePath />
      {/* 슬라이드 */}
      <ListBox>
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </ListBox>
    </CourseNavbar>
  );
};
export default CourseList;
