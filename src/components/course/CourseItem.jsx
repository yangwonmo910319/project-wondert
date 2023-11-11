import styled from "styled-components";
import React, { useState, useEffect } from "react";
import CourseAxiosApi from "../../api/CourseAxiosApi";

//컨셉 목록 전체 박스
const CourseBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  padding: 5px;
  border-bottom: 3px dashed gray;
`;
//컨셉 메인박스
const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;
`;
// 컨셉 사진칸
const MainImg = styled.img`
  height: 200px;
  width: 200px;
  background-size: cover;
  border-radius: 10px;
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
  const [list, setList] = useState("");
  const area = "대만";
  useEffect(() => {
    const CourseList = async () => {
      try {
        console.log("CouseList Call");
        const resp = await CourseAxiosApi.courseList(area); //전체 조회
        if (resp.status === 200) setList(resp.data);
        console.log(resp.data);
      } catch (e) {
        console.log(e);
      }
    };
    CourseList();
  }, [area]);
  return (
    <>
      {list &&
        list.map((a, course_area) => (
          <CourseBox key={course_area}>
            <MainBox>
              <span
                style={{
                  fontSize: "15px",
                }}
              >
                {a.course_hash}
              </span>
              <br />
              <MainImg src={a.main_img}></MainImg>
            </MainBox>
            <ArticleBox>
              <TopicBox
                style={{
                  fontSize: "30px",
                  color: "black",
                }}
              >
                {a.topic}
              </TopicBox>
              <PathBox
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "black",
                }}
              >
                <div className="Path1">{a.course_path1}</div>
                <p style={{ color: "gray" }}>▷</p>
                <div className="Path2">{a.course_path2}</div>
                <p style={{ color: "gray" }}>▷</p>

                <div className="Path3">{a.course_path3}</div>
              </PathBox>
            </ArticleBox>
          </CourseBox>
        ))}
    </>
  );
};
export default CourseItem;
