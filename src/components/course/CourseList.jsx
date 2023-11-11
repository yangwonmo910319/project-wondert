import CourseBtn from "./CourseBtn";
import React from "react";
import CourseItem from "./CourseItem";
import styled from "styled-components";

const CourseNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CourseList = () => {
  return (
    <CourseNavbar>
      <CourseBtn />
      <CourseItem />
    </CourseNavbar>
  );
};
export default CourseList;
