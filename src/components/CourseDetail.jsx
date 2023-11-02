import styled from "styled-components";

const Container1 = styled.div`
  display: flex;
  justify-content: center;
  .mainimg {
    display: flex;
    justify-content: center;
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    height: 400px;
    width: 1200px;
  }
`;

const Container2 = styled.div`
  padding: 10px;
  .topicbox {
    display: flex;
    justify-content: space-between;
  }
  .topic {
    border: 1px solid #45474b;
    padding: 10px 16px;
    border-radius: 10px;
    width: 950px;
  }
  .join {
    border: 1px solid #45474b;
    padding: 10px 16px;
    border-radius: 10px;
  }
`;
const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 900px;
  border: 1px solid #45474b;
  border-radius: 10px;

  .box {
    display: flex;
    justify-content: space-between;
    border: 1px solid #45474b;
    height: 260px;
    width: 860px;
    border-radius: 10px;
  }
  .box1 {
    background: black;
    border-radius: 10px;
    height: 260px;
    width: 425px;
  }
  .box2 {
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    border-radius: 10px;
    height: 260px;
    width: 425px;
    transform: rotate(5deg);
  }
`;
const CourseDetail = () => {
  return (
    <>
      <Container1>
        <span>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "black",
              textAlign: "center",
            }}
          >
            # 코스 컨셉
          </span>
          <div className="mainimg"></div>
        </span>
      </Container1>
      <Container2>
        <div className="topicbox">
          <span className="topic">주제</span>
          <button className="join">즐겨찾기</button>
        </div>
      </Container2>
      <Container3>
        <div className="box">
          <div className="box1"></div>
          <div className="box2"></div>
        </div>
      </Container3>
    </>
  );
};
export default CourseDetail;
