/*하늘 페이지 */
import styled from "styled-components";
import CourseList from "../../components/course/CourseList";
import GlobalButton from "../../components/GlobalButton";

const Coursecss = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Course = () => {
  return (
    <Coursecss>
      <br />
      <GlobalButton />
      <CourseList />
    </Coursecss>
  );
};

export default Course;
