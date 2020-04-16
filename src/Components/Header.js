import React from "react";
import Calendar from "react-date-picker";
// import "react-calendar/dist/Calendar.css";

export default function Header(props) {
  const dateConversion = () => {
    const str = props.data.date;
    const dateStr = str.split("-");
    const [year, month, day] = dateStr;
    let today = new Date(year, month - 1, day);
    return today.toDateString();
  };
  return (
    <header>
      <h1>NASA's Daily Photo</h1>
      {/* <p>{dateConversion()}</p> */}
      <Calendar selected={new Date(props.data.date)} maxDate={new Date()} value={new Date()} />
    </header>
  );
}
