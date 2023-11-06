/*하늘 페이지 */
import CourseDetail from "../components/CourseDetail";
import CourseList from "../components/CourseList";
import CourseSelect from "../components/CourseSelect";
import CourseSelectCopy1 from "../components/CourseSelect copy";

const Course = () => {
  return (
    <>
      <CourseSelect />
      <CourseSelectCopy1 />

      <CourseDetail />
      <CourseList/>
    </>
  );
};

export default Course;
