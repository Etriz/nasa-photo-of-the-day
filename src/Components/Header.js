import React from "react";

export default function Header(props) {
  const photoDate = () => {
    const str = props.data.date;
    const dateStr = str.split("-");
    const [year, month, day] = dateStr;
    let today = new Date(year, month - 1, day);
    return today.toDateString();
  };
  return (
    <nav>
      <h1>Photo of the Day from {photoDate()}</h1>
    </nav>
  );
}
