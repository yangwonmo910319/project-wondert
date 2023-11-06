/*하늘 페이지 */
import CourseDetail from "../components/CourseDetail";
import CourseList from "../components/CourseList";
import CourseSelect from "../components/CourseSelect";

const Course = () => {
  return (
    <>
      <CourseSelect />
      <CourseDetail />
      <CourseList/>
    </>
  );
};

export default Course;
