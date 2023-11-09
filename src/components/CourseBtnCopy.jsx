import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/Worldcontext";
import CourseItem from "./CourseItem";

const SelectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  .SelectBoxImg {
    padding: 10px;
    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 150px;
      height: 150px;
      background-size: cover;
      border-radius: 50%;
      margin: 10px;
    }
    .Click {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    &:hover {
      opacity: 0.8;
      transform: scale(1.1);
    }
  }
`;

const CourseBtnCopy = () => {
  // // 가져오는거
  // const context = useContext(UserContext);
  // // 값 업데이트
  // const { world } = context;
  // const [data, setData] = useState([]);

  // // 필터된 데이터를 저장하는 상태
  // const [selectedCountryData, setSelectedCountryData] = useState([]);

  // useEffect(() => {
  //   console.log("Effect렌더링");
  //   // world값과 일치하는 데이터 필터링
  //   const filteredData = data.filter((i) => i.COURSE_WORLD === world);
  //   setSelectedCountryData(filteredData);
  // }, [data, world]);

  return (
    <SelectBox>
      <div className="SelectBoxImg">
        {/* <div
          className="img"
          style={{ backgroundImage: `url(${selectedCountryData.MAIN_IMG})` }}
        ></div>
        <div className="Click">{selectedCountryData.COURSE_AREA}</div> */}
      </div>
      {/* <CourseItem data={selectedCountryData} /> */}
    </SelectBox>
  );
};

export default CourseBtnCopy;
