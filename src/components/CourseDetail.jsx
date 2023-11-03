import styled from "styled-components";
import CourseBtn from "./CourseBtn";

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
    justify-content: space-evenly;
    width: 1200px;
  }
  .topic {
    display: flex;
    border: 1px solid #45474b;
    padding: 10px 16px;
    border-radius: 10px;
    width: 950px;
  }
  .join {
    display: flex;
    border: 1px solid #45474b;
    padding: 10px 16px;
    border-radius: 10px;
  }
`;
const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 474px;
  width: 1200px;
  border: 1px solid #45474b;
  border-radius: 10px;

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

    .coursePathBox {
      border: 1px solid #45474b;
      padding: 10px;
      border-radius: 10px;
    }
    .courseArticleBox {
      display: flex;
      flex-direction: column;
      border: 1px solid #45474b;
      border-radius: 10px;
      height: 160px;
      padding: 10px;
    }
  }
  .box2 {
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    border-radius: 10px;
    height: 419px;
    width: 564px;
    transform: rotate(2deg);
  }
  .box2A {
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    border-radius: 10px;
    height: 419px;
    width: 564px;
    transform: rotate(-2deg);
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
            # 코스 컨셉
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
              fontSize: "20px",
              color: "black",
            }}
          >
            주제라고주제라고주제라고주제라고주제라고주제라고주제라고
          </span>
          <button className="join">즐겨찾기</button>
        </div>
      </Container2>
      <Container3>
        <div className="box">
          <div className="box1">
            <div className="coursePathBox">코스경로1</div>
            <div className="courseArticleBox">설명 1</div>
            <div className="courseArticleBox">설명 2</div>
          </div>
          <div className="box2"></div>
        </div>
      </Container3>
      <Container3>
        <div className="box">
          <div className="box2A"></div>
          <div className="box1">
            <div className="coursePathBox">코스경로2</div>
            <div className="courseArticleBox">설명 1</div>
            <div className="courseArticleBox">설명 2</div>
          </div>
        </div>
      </Container3>
      <Container3>
        <div className="box">
          <div className="box1">
            <div className="coursePathBox">코스경로3</div>
            <div className="courseArticleBox">설명 1</div>
            <div className="courseArticleBox">설명 2</div>
          </div>
          <div className="box2"></div>
        </div>
      </Container3>
    </CourseDetailItem>
  );
};
export default CourseDetail;
