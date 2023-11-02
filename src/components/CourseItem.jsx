import styled from "styled-components";
import CourseBtn from "./CourseBtn";

//컨셉 목록 전체 박스
const CourseBox = styled.div`
  display: flex;
  border: 1px solid black;
  margin: 0 auto;
  border-radius: 10px;
`;
//컨셉 메인박스
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  margin-top: 0%;
  align-items: center;
  flex-grow: 1;
`;
// 컨셉 사진칸
const MainImg = styled.div`
  display: flex;
  background-image: url(https://www.kkday.com/ko/blog/wp-content/uploads/taiwan_city_19.jpeg);
  background-size: cover;
  height: 200px;
  width: 200px;
  border-radius: 10px;
`;
// 컨셉 글칸
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aqua;
  height: 300px;
  width: 500px;
  flex-grow: 9;
  border-radius: 10px;
`;
const TopicBox = styled.div`
  background-color: beige;
  flex-grow: 1;
  justify-content: center;
  border-radius: 10px;
`;
const PathBox = styled.div`
  background-color: bisque;
  flex-grow: 1;
  border-radius: 10px;
`;

const CourseItem = () => {
  return (
    <>
      <CourseBox>
        <MainBox>
          <p>#코스컨셉</p>
          <MainImg></MainImg>
        </MainBox>
        <ArticleBox>
          <TopicBox>주제</TopicBox>
          <PathBox>경로</PathBox>
        </ArticleBox>
      </CourseBox>
    </>
  );
};
export default CourseItem;
