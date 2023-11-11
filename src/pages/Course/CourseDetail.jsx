import styled from "styled-components";
import CourseCom from "../../components/course/CourseCom";
import React, { useState, useEffect } from "react";
import CourseAxiosApi from "../../api/CourseAxiosApi";

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
    background-color: #164863;
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
    border-bottom: 2px dashed #164863;

    .coursePathBox {
      border-bottom: 3px solid #164863;
      padding: 10px;
      font-weight: bold;
      font-size: 30px;
      color: #164863;
    }

    .courseArticleBox {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      padding: 10px;
      color: #427d9d;
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
    border: 20px solid #427d9d;
    border-style: ridge;
  }
  .box2A {
    background-image: url(https://dimgcdn.ybtour.co.kr/TN/cd/cda853b2799c287503ec63fd25f6d033.tn.410x280.jpg);
    background-size: cover;
    height: 419px;
    width: 564px;
    transform: rotate(-2deg);
    border: 20px solid #ddf2fd;
    border-style: ridge;
  }
`;
const CourseDetail = () => {
  const [list, setList] = useState("");
  const code = "C1";
  useEffect(() => {
    const CourseDetailItem = async () => {
      try {
        console.log("CouseDetail Call");
        const resp = await CourseAxiosApi.selectCourseDetail(code); //전체 조회
        if (resp.status === 200) setList(resp.data);
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    CourseDetailItem();
  }, [code]);
  return (
    <>
      {list &&
        list.map((b, course_code) => (
          <CourseDetailItem key={course_code}>
            <Container1>
              <div className="main1">
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "#427d9d",
                  }}
                >
                  {b.course_hash}
                </span>
                <div className="mainimg" src={b.main_img}></div>
              </div>
            </Container1>
            <Container2>
              <div className="topicbox">
                <span
                  className="topic"
                  style={{
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "#ddf2fd",
                  }}
                >
                  {b.topic}
                </span>
                <button className="join">즐겨찾기</button>
              </div>
            </Container2>
            <Container3>
              <div className="box">
                <div className="box1">
                  <div className="coursePathBox">{b.course_path1}</div>
                  <div className="courseArticleBox">{b.course_article1}</div>
                  <div className="courseArticleBox2">{b.course_article1_1}</div>
                </div>
                <div className="box2" src={b.course_img1}></div>
              </div>
            </Container3>
            <Container3>
              <div className="box">
                <div className="box2A" src={b.course_img2}></div>
                <div className="box1">
                  <div className="coursePathBox">{b.course_path2}</div>
                  <div className="courseArticleBox">{b.course_article2}</div>
                  <div className="courseArticleBox2">{b.course_article2_1}</div>
                </div>
              </div>
            </Container3>
            <Container3>
              <div className="box">
                <div className="box1">
                  <div className="coursePathBox">{b.course_path3}</div>
                  <div className="courseArticleBox">{b.course_article3}</div>
                  <div className="courseArticleBox2">{b.course_article3_1}</div>
                </div>
                <div className="box2" src={b.course_img3}></div>
              </div>
            </Container3>
          </CourseDetailItem>
        ))}
      <CourseCom />
    </>
  );
};
export default CourseDetail;
