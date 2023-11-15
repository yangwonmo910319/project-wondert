
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일
import styled from "styled-components";
import dayjs from 'dayjs';

const now = dayjs(); // 현재 날짜와 시간 가져오기
console.log(now.format('YYYY-MM-DD')); // 원하는 형식으로 날짜 포맷팅

const Diary = styled.div`

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #827e7e;
    box-shadow: 0 0 0.5px black;
    width: 500px;
    height: 550px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 15px;
  }
  .react-calendar__month-view__weekdays{
    flex-wrap: wrap;
    font-weight: bold;
    font-size: 15px;

  }
  .react-calendar__month-view__weekdays__weekday{
    margin: 10px 0px;
    width: 70px;
    font-weight: bold;
    font-size: 15px;

  }
  .react-calendar__viewContainer {
    margin: -130px 40px;
    font-weight: bold;
    font-size: 15px;
  }
  .react-calendar__month-view__days {
    border: 1px solid lightgray;
  }
`;

const MyCalendar = ({setToDate,setToDate1}) => {
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const onChangeDateRange = (newDateRange) => {
    const formattedStartDate = dayjs(newDateRange[0]).format('YYYY-MM-DD');
    const formattedEndDate = dayjs(newDateRange[1]).format('YYYY-MM-DD');
    setToDate(formattedStartDate);
    setToDate1(formattedEndDate);
    setDateRange(newDateRange);
    setStartDate(formattedStartDate);
    setEndDate(formattedEndDate);
  };

  return (
    <Diary>
      <div>
        <Calendar
          onChange={onChangeDateRange}
          value={dateRange}
          selectRange={true}
          maxDate={new Date()}
          formatDay={(locale, date) => dayjs(date).format('DD')}
        />

        <label>시작일:</label>
        <p>선택된 시작일: {startDate}</p>
      </div>
           
      <div>
        <label>종료일:</label>
        <p>선택된 종료일: {endDate}</p>
      </div>
    </Diary>
  );
};

export default MyCalendar;