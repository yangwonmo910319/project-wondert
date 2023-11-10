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
      {/* <CourseBtn toggle={toggle} data={data} />
      {data.map((item, index) => (
        <CourseItem key={index} data={item} />
      ))} */}
    </CourseNavbar>
  );
};
export default CourseList;
