/*하늘 페이지 */
import styled from "styled-components";
import CourseDetail from "../components/CourseDetail";
import CourseList from "../components/CourseList";
import CourseBtn from "../components/CourseBtn";
const Coursecss = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Course = () => {
  return (
    <Coursecss>
      <CourseList />
    </Coursecss>
  );
};

export default Course;
