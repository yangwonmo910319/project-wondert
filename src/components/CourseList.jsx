import CourseBtn from "./CourseBtn";
import styled from "styled-components";
import CourseItem from "./CourseItem";
import CourseSlide from "./CourseSlide";

// 전체 한박스
const CourseNavbar = styled.div`
  display: flex;
  flex-direction: column;
`;

// 슬라이드 자리
const SlidePath = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CourseList = () => {
  return (
    <CourseNavbar>
      <CourseBtn />
      <SlidePath>
        <CourseSlide />
      </SlidePath>
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
      <CourseItem />
    </CourseNavbar>
  );
};
export default CourseList;
