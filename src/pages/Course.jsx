/*하늘 페이지 */
import styled from "styled-components";
import CourseDetail from "../components/CourseDetail";
import CourseList from "../components/CourseList";
import CourseSelect from "../components/CourseSelect";
import CourseSelectCopy1 from "../components/CourseSelect copy";
const Coursecss=styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
const Course = () => {
  return (
    <Coursecss>
      <CourseSelect />
      <CourseSelectCopy1 />
      <CourseDetail />
      <CourseList/>
    </Coursecss>
  );
};

export default Course;
