import styled from "styled-components";
import React, { useState } from "react";
// 버튼 사이즈 맞추기
const CourseBtnG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  padding: 10px 16px;
  margin: 10px;
`;

const CourseBtn = () => {
  // 상단바 해외
  const [Area, setArea] = useState();
  return (
    <>
      <CourseBtnG>
        <Button className="대만" onClick={() => setArea("대만")}>
          대만
        </Button>
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
    </>
  );
};
export default CourseBtn;
