import CourseBtn from "./CourseBtn";
import React, { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import styled from "styled-components";

const CourseNavbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;

const CourseList = ({ world }) => {
  const [selectedArea, setSelectedArea] = useState("여수");

  useEffect(() => {
    if (world === "sss") {
      setSelectedArea("대만");
    } else setSelectedArea("여수");
  }, [world]);

  const handleAreaChange = (area) => {
    setSelectedArea(area);
  };
  return (
    <CourseNavbar>
      <CourseBtn world={world} onAreaChange={handleAreaChange} />
      <CourseItem selectedArea={selectedArea} />
    </CourseNavbar>
  );
};
export default CourseList;
