/*하늘 페이지 */
import styled from "styled-components";
import CourseList from "../../components/course/CourseList";
import GlobalButton from "../../components/GlobalButton";
import { useCallback, useState } from "react";

const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Coursecss = styled.div`
  position: relative;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Course = () => {
  const [onselect1, setOnselect1] = useState("korea");
  const [onselect2, setOnselect2] = useState("ALL");
  const onselect = (sel) => {
    setOnselect1(sel);
  };
  const aeraSelect = (sel1) => {
    setOnselect2(sel1);
  };
  const onselect3 = () => {
    setOnselect2("ALL");
  };

  return (
    <Box>
      <Coursecss>
        <br />
        <GlobalButton onselect={onselect} onselect3={onselect3} />
        <CourseList world={onselect1} />
      </Coursecss>
    </Box>
  );
};

export default Course;
