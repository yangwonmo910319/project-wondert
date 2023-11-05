import styled from "styled-components";
import CourseBtn from "./CourseBtn";

//컨셉 목록 전체 박스
const CourseBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  border-radius: 10px;
  margin: 5px;
  padding: 20px;
`;
//컨셉 메인박스
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
// 컨셉 사진칸
const MainImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 20;
  height: 200px;
`;
const TopicBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`;
const PathBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  padding: 10px;
  width: 100%;
`;

const CourseItem = () => {
  return (
    <>
      <CourseBox>
        <MainBox>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "black",
            }}
          >
            # 코스 컨셉
          </span>
          <MainImg></MainImg>
        </MainBox>
        <ArticleBox>
          <TopicBox
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "black",
            }}
          >
            주제
          </TopicBox>
          <PathBox
            style={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "black",
            }}
          >
            <div className="Path1">경로1</div>
            <p>-></p>
            <div className="Path2">경로2</div>
            <p>-></p>
            <div className="Path3">경로3</div>
          </PathBox>
        </ArticleBox>
      </CourseBox>
    </>
  );
};
export default CourseItem;
