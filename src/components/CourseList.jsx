import CourseBtn from "./CourseBtn";
import styled, { css } from "styled-components";
import CourseItem from "./CourseItem";
import GlobalButton from "../components/GlobalButton";
import { useState } from "react";

// 전체 한박스
const CourseNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const CourseData = [
  {
    COURSE_HASH: "# 대만의 하이라이트 코스",
    TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스",
    COURSE_PATH1: "시먼딩",
    COURSE_PATH2: "보피리아오 역사거리",
    COURSE_PATH3: "타이베이 101",
  },
  {
    COURSE_HASH: "# 대만의 하이라이트 코스2",
    TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스2",
    COURSE_PATH1: "시먼딩2",
    COURSE_PATH2: "보피리아오 역사거리2",
    COURSE_PATH3: "타이베이 1012",
  },
  {
    COURSE_HASH: "# 대만의 하이라이트 코스3",
    TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스3",
    COURSE_PATH1: "시먼딩3",
    COURSE_PATH2: "보피리아오 역사거리3",
    COURSE_PATH3: "타이베이 1013",
  },
  {
    COURSE_HASH: "# 대만의 하이라이트 코스4",
    TOPIC: "특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스4",
    COURSE_PATH1: "시먼딩4",
    COURSE_PATH2: "보피리아오 역사거리4",
    COURSE_PATH3: "타이베이 1014",
  },
];
const CourseList = () => {
  return (
    <CourseNavbar>
      <GlobalButton />
      <CourseBtn />
      {CourseData.map((data) => (
        <CourseItem key={data.COURSE_CODE} data={data} />
      ))}
    </CourseNavbar>
  );
};
export default CourseList;
