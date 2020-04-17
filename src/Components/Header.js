import React from "react";
import styled from "styled-components";
import Calendar from "react-date-picker";
// import "react-calendar/dist/Calendar.css";

const HeaderArea = styled.header`
  padding: 0.5rem;
  font-size: calc(10px + 2vmin);
  color: white;
  background: #282c34;
  border-bottom: 1px solid #61dafb;
  width: 100%;
`;

export default function Header(props) {
  // const dateConversion = () => {
  //   const str = props.data.date;
  //   const dateStr = str.split("-");
  //   const [year, month, day] = dateStr;
  //   let today = new Date(year, month - 1, day);
  //   return today.toDateString();
  // };
  return (
    <HeaderArea>
      <h1>NASA's Daily Photo</h1>
      <p>{props.date.toDateString()}</p>
      <p>{console.log(props.date)}</p>
      <Calendar
        calendarType="US"
        maxDate={new Date()}
        value={new Date(props.date)}
        onChange={(date) => props.setDate(new Date(date))} // exports date in DateString() format? maybe?
      />
    </HeaderArea>
  );
}
