import styled from "styled-components";
import React, { useState } from "react";

const Button = styled.div`
  display: flex;
  margin: 2px auto;
  justify-content: center;
  border: 1px solid #45474b;
  padding: 10px 16px;
  border-radius: 10px;
`;

const CourseBtn = () => {
  // 해외, 국내 지역으로 자료 받아오면 깔리는거 하고싶다...
  const [area, setArea] = useState(null);
  return (
    <>
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
    </>
  );
};
export default CourseBtn;
