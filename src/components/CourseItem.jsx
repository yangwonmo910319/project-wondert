import styled from "styled-components";
import CourseBtn from "./CourseBtn";

//컨셉 목록 전체 박스
const CourseBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  padding: 10px;
  border-bottom: 3px dashed gray;
`;
//컨셉 메인박스
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  padding: 10px;
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
`;
// 컨셉 글칸
const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 20;
  height: 200px;
`;
const TopicBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid black;
  padding: 10px;
  width: 100%;
`;
const PathBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
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
            # 대만의 하이라이트 코스
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
            특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스
          </TopicBox>
          <PathBox
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "black",
            }}
          >
            <div className="Path1">시먼딩</div>
            <p>▷</p>
            <div className="Path2">보피리아오 역사거리</div>
            <p>▷</p>
            <div className="Path3">타이베이 101</div>
          </PathBox>
        </ArticleBox>
      </CourseBox>
    </>
  );
};
export default CourseItem;
