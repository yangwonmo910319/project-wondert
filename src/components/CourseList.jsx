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
  margin: 10px auto;
`;
const CourseList = () => {
  return (
    <CourseNavbar>
      <CourseBtn />
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
