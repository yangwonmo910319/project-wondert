import styled from "styled-components";
import React, { useState } from "react";

const CourseNav = styled.div`
  border: 1px solid #45474b;
`;
const CourseBtnG = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
`;
const Button = styled.button`
  border: 1px solid #45474b;
  padding: 10px 16px;
  border-radius: 10px;
  margin: 0 auto;
  justify-content: space-between;
`;

const CourseBtn = () => {
  // 상단바 해외
  const [area, setArea] = useState(true);
  return (
    <CourseNav>
      <CourseBtnG>
        <Button className="대만" onClick={() => setArea("대만")}>
          대만
        </Button>
        <br />
        <Button className="일본" onClick={() => setArea("일본")}>
          일본
        </Button>
        <Button className="싱가폴" onClick={() => setArea("싱가폴")}>
          싱가폴
        </Button>
        <Button className="호주" onClick={() => setArea("호주")}>
          호주
        </Button>
        <Button className="베트남" onClick={() => setArea("베트남")}>
          베트남
        </Button>
      </CourseBtnG>
    </CourseNav>
  );
};
export default CourseBtn;
