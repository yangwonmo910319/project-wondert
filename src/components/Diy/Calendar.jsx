import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import styled from "styled-components";

const Diary = styled.div`
    .react-calendar {
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 2px solid lightgray;
      box-shadow: 0 0 0.5px black;
      width: 500px;
      height: 520px;
      border-radius: 20px;
    }
    .react-calendar__month-view__weekdays{
      flex-wrap: wrap;
      margin-bottom: 10px;
  
    }
    .react-calendar__month-view__weekdays__weekday{
      margin: 20px 0px;
      width: 70px;

    }
    .react-calendar__viewContainer {
      margin: -70px 40px;
    }
   .react-calendar__month-view__days {
      border: 1px solid lightgray;
   }
`;
const MyCalendar = ({setToDate,setToDate1}) => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);

  const onChangeDateRange = (newDateRange) => {
    setDateRange(newDateRange);
    setToDate(dateRange[0].toDateString())
    setToDate1(dateRange[1].toDateString())
  };

  return (
    <Diary>
      <div>
        <Calendar
          onChange={onChangeDateRange}
          value={dateRange}
          selectRange={true}
        />
        <label>시작일:</label>
        <p>선택된 시작일: {dateRange[0].toDateString()}</p>
      </div>
      <div>
        <label>종료일:</label>
        <p>선택된 종료일: {dateRange[1].toDateString()}</p>
      </div>
    </Diary>
  );
};

export default MyCalendar;