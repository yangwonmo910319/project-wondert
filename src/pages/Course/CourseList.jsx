import CourseBtnCopy from "../../components/CourseBtnCopy";
import React from "react";
import CourseItem from "../../components/CourseItem";
import styled from "styled-components";

const CourseNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const CourseList = () => {
  return (
    <CourseNavbar>
      <CourseBtnCopy />
      <CourseItem />
      {/* <CourseBtn toggle={toggle} data={data} />
      {data.map((item, index) => (
        <CourseItem key={index} data={item} />
      ))} */}
    </CourseNavbar>
  );
};
export default CourseList;
