import styled from "styled-components";
import CourseBtn from "../../components/CourseBtn";
import CourseCom from "../../components/CourseCom";

const CourseDetailItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;

  .mainimg {
    display: flex;
    justify-content: center;
    background-image: url(https://img-kyowontour.kyowontour.com/erp//media/imagecontentfile/70b7bf53-b335-4bb5-8ada-9ed201233ac9.jpg);
    background-size: cover;
    height: 400px;
    width: 1200px;
  }
`;

const Container2 = styled.div`
  padding: 10px;
  .topicbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1200px;
    border: 3px double gray;
  }
  .topic {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    width: 950px;
  }
  .join {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    padding: 10px 16px;
    margin: 10px;
  }
`;
const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 474px;
  width: 1200px;
  margin: 5px;

  .box {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .boxA {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  .box1 {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 419px;
    width: 564px;
    border-bottom: 2px dashed #45474b;

    .coursePathBox {
      border-bottom: 3px solid #45474b;
      padding: 10px;
    }

    .courseArticleBox {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      padding: 10px;
    }
    .courseArticleBox2 {
      display: flex;
      text-align: center;
      font-size: 20px;
      padding: 10px;
      line-height: 2;
      word-break: keep-all;
    }
  }
  .box2 {
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    height: 419px;
    width: 564px;
    transform: rotate(2deg);
    border: 3px solid #45474b;
  }
  .box2A {
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    height: 419px;
    width: 564px;
    transform: rotate(-2deg);
    border: 3px solid #45474b;
  }
`;
const CourseDetail = () => {
  return (
    <CourseDetailItem>
      <CourseBtn />
      <Container1>
        <div className="main1">
          <span
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "black",
            }}
          >
            # 대만의 하이라이트 코스
          </span>
          <div className="mainimg"></div>
        </div>
      </Container1>
      <Container2>
        <div className="topicbox">
          <span
            className="topic"
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              color: "black",
            }}
          >
            특유의 다양한 볼거리와 먹거리들이 참 매력적인 코스
          </span>
          <button className="join">즐겨찾기</button>
        </div>
      </Container2>
      <Container3>
        <div className="box">
          <div className="box1">
            <div
              className="coursePathBox"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "black",
              }}
            >
              시먼딩
            </div>
            <div className="courseArticleBox">
              타이베이에서 가장 인기 있는 쇼핑 지역
            </div>
            <div className="courseArticleBox2">
              겉보기엔 서울 명동과 크게 다를 바 없어 보일 수 있지만 좀 더 자세히
              살펴보면 길거리 예술, 타투 거리, 메이드 복장의 직원이 있는 독특한
              컨셉의 카페 등 트렌디하고 이색적인 볼거리로 가득한 곳입니다. 까도
              까도 끝없는 양파 같은 매력을 지닌 시먼딩, 다양한 컨디션과 컨셉의
              호텔도 모여 있어서 이곳을 숙소로 잡고 대만여행 장소들을
              둘러보기에도 좋습니다.
            </div>
          </div>
          <div className="box2"></div>
        </div>
      </Container3>
      <Container3>
        <div className="box">
          <div className="box2A"></div>
          <div className="box1">
            <div
              className="coursePathBox"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "black",
              }}
            >
              코스경로2
            </div>
            <div className="courseArticleBox">설명 1</div>
            <div className="courseArticleBox2">설명 2</div>
          </div>
        </div>
      </Container3>
      <Container3>
        <div className="box">
          <div className="box1">
            <div
              className="coursePathBox"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
                color: "black",
              }}
            >
              코스경로3
            </div>
            <div className="courseArticleBox">설명 1</div>
            <div className="courseArticleBox2">설명 2</div>
          </div>
          <div className="box2"></div>
        </div>
      </Container3>
      <CourseCom />
    </CourseDetailItem>
  );
};
export default CourseDetail;
