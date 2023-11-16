import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DiyAxiosApi from "../../api/DiyAxiosApi";
import GoogleMap from "../../utill/googleMap";

const Course = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TravelTitle = styled.div`
  p {
    margin: 60px 35px;
    line-height: 30px;
  }
  h5 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px 15px;
  }
  ul {
    width: 1000px;
    border: 1px solid #827e7e;
    box-shadow: 0 0 5px #827e7e;
    border-radius: 5px;
    padding: 20px 40px;
  }
  li {
    font-size: 15px;
    list-style: circle;
    line-height: 40px;
    margin: 0 50px;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
    margin: 10px 20px;
  }
`;

const TavelCs = styled.div`
  .course_wrap h4 {
    font-weight: bold;
    margin: 20px 20px;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }
  .pic1 {
    margin-left: 60px;
  }
  .wrapper img {
    width: 350px;
    height: 250px;
    margin: 20px 60px;
  }
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 250px;
    border: 1px solid black;
  }
  b {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 750px;
    height: 180px;
    margin: 30px;
    border: 1px solid black;
  }
`;

const Course1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .travel {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }
`;
const Day = styled.div`
  font-size: 35px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  border: 1px solid lightgray;
  background-color: lightgray;
  border-radius: 10px;
`;
const Travel = styled.div`
  margin: 30px 30px;
  display: flex;
`;
const Travel2 = styled.div`
  font-size: 15px;
  border: 1px solid lightgray;
  width: 1000px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 40px;
`;

const FieldContainer = styled.div``;

const StyledInput = styled.div``;

const TravelCourse = () => {
  const [travelCourse, setTravelCourse] = useState("");
  const [world, setWorld] = useState("");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [theme, setTheme] = useState("");
  const [num, setNum] = useState("");
  const [content, setContent] = useState("");
  const world2 = window.localStorage.getItem("world");
  const area2 = window.localStorage.getItem("area");
  const to_date2 = window.localStorage.getItem("to_date");
  const e_Date2 = window.localStorage.getItem("e_Date");
  const tv_theme2 = window.localStorage.getItem("tv_theme");

  const handleWorldChange = (e) => {
    setWorld(e.target.value);
  };
  const handAreaChange = (e) => {
    setArea(e.target.value);
  };
  const handDateChange = (e) => {
    setDate(e.target.value);
  };
  const handThemeChange = (e) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    const TravelCourse = async () => {
      try {
        const rsp = await DiyAxiosApi.travelContent(
          window.localStorage.getItem("travelNum")
        );
        if (rsp.status === 200) {
          setTravelCourse(rsp.data);
        }
      } catch (e) {
        alert(e);
      }
      try {
        const rsp = await DiyAxiosApi.SelectDIY(
          window.localStorage.getItem("travelNum")
        );
        if (rsp.status === 200) {
          setContent(rsp.data);
        }
      } catch (e) {
        alert(e);
      }
    };
    TravelCourse(travelCourse);
  }, []);

  return (
    <Course>
      <TravelTitle>
        <FieldContainer>
          <StyledInput
            type="radio"
            id="world"
            name="world"
            value={world}
            onChange={handleWorldChange}
          ></StyledInput>
        </FieldContainer>

        <FieldContainer>
          <StyledInput
            type="radio"
            id="area"
            name="area"
            value={area}
            onChange={handAreaChange}
          ></StyledInput>
        </FieldContainer>

        <FieldContainer>
          <StyledInput
            type="radio"
            id="date"
            name="date"
            value={date}
            onChange={handDateChange}
          ></StyledInput>
        </FieldContainer>

        <FieldContainer>
          <StyledInput
            type="radio"
            id="theme"
            name="theme"
            value={theme}
            onChange={handThemeChange}
          ></StyledInput>
        </FieldContainer>
        <p>
          <ul>
            <h5>[4. 여행 후기 정보]</h5>
            <h3>〈내 여행 정보〉</h3>
            <li>나라 : {world2}</li>
            <li>지역 : {area2}</li>
            <li>
              여행 날짜 : {to_date2} ~ {e_Date2}
            </li>
            <li>여행 테마 : #{tv_theme2}</li>
          </ul>
        </p>
      </TravelTitle>
      <TavelCs>
        {content &&
          content.map((data) => (
            <Course1 key={data.travel_num}>
              <Day>Day - {data.d_day}</Day>
              <Course1>
                <div className="travel">
                  <Travel>
                    <img
                      src={data.travel_pic}
                      alt="사진"
                      width="400px"
                      height="400px"
                    />
                  </Travel>
                  <GoogleMap />
                </div>
                <div>
                  <Travel2>{data.travel_writing}</Travel2>
                </div>
              </Course1>
            </Course1>
          ))}
      </TavelCs>
    </Course>
  );
};

export default TravelCourse;
