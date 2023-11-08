/*하늘 페이지 */
import styled from "styled-components";
import CourseDetail from "./Course/CourseDetail";
import CourseList from "./Course/CourseList";
const Coursecss = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const Course = () => {
  return (
    <Coursecss>
      <CourseDetail />
    </Coursecss>
  );
};

export default Course;
