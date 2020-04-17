import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Image from "./Components/Image";
import "./App.css";
// import TEST from "./TEST-DATA.json";

function App() {
  // const [test] = useState(TEST);
  const [date, setDate] = useState(new Date());

  const changeApiDate = (someDate) => {
    let todayDate = new Date(someDate);
    let month = (todayDate.getMonth() + 1).toString().padStart(2, "0");
    let day = todayDate.getDate();
    let year = todayDate.getFullYear();
    return `${year}-${month}-${day}`; //sets date state in format yyyy-mm-dd as needed by API
  };

  const [apiDate, setApiDate] = useState(changeApiDate(Date.now()));

  useEffect(() => {
    setApiDate(changeApiDate(date));
  }, [date]);

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=bz4FmhGJfLgGHH87N2KzC1axPwRbe6Ih7xVdz3ev&date=${apiDate}`
      )
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error("Axios Error!", err);
        setData(err);
      });
  }, [apiDate]);

  const changeDate = (date) => {
    setDate(date);
  };
  const previousDate = () => {
    const foo = date.getDate() - 1;
    const previous = new Date(date.setDate(foo));
    setDate(previous);
  };
  const nextDate = () => {
    const foo = date.getDate() + 1;
    const next = new Date(date.setDate(foo));
    setDate(next);
  };
  return (
    <div className="App">
      <Header data={data} date={date} changeDate={changeDate} apiDate={apiDate} />
      <Image data={data} date={date} previousDate={previousDate} nextDate={nextDate} />
    </div>
  );
}

export default App;
