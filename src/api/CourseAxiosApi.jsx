import axios from "axios";

const WONDER_WALKER = "http://localhost:8111";

const CourseAxiosApi = {
  // 추천코스 리스트  조회
  courseList: async (area) => {
    return await axios.get(WONDER_WALKER + `/Course?course_area=${area}`);
  },
  // 추천코스 리스트 하나 가져오기
  selectCourseDetail: async (code) => {
    return await axios.get(WONDER_WALKER + `/Course/Info?course_code=${code}`);
  },
};

export default CourseAxiosApi;
