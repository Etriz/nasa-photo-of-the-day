import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Image from "./Components/Image";
import "./App.css";
// import TEST from "./TEST-DATA.json";

function App() {
  // const [test] = useState(TEST);
  const [dateState, setDateState] = useState(new Date());

  const changeApiDate = (someDate) => {
    let todayDate = new Date(someDate);
    let month = (todayDate.getMonth() + 1).toString().padStart(2, "0");
    let day = todayDate.getDate();
    let year = todayDate.getFullYear();
    return `${year}-${month}-${day}`; //sets date state in format yyyy-mm-dd as needed by API
  };

  const [apiDate, setApiDate] = useState(changeApiDate(Date.now()));

  useEffect(() => {
    setApiDate(changeApiDate(dateState));
  }, [dateState]);

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
        setData("Error");
      });
  }, [apiDate]);

  const changeDate = (date) => {
    setDateState(date);
  };
  const previousDate = () => {
    const foo = dateState.getDate() - 1;
    const previous = new Date(dateState.setDate(foo));
    const today = new Date(Date.now());
    if (previous >= Date.now()) {
      changeDate(today);
    } else {
      changeDate(previous);
      // console.log(dateState);
    }
  };
  const nextDate = () => {
    const foo = dateState.getDate() + 1;
    const next = new Date(dateState.setDate(foo));
    if (next <= Date.now()) {
      changeDate(next);
    } else {
      setData({ title: "Unable to show the future!", url: " ", hdurl: " " });
      // console.log(dateState);
    }
  };
  return (
    <div className="App">
      <Header data={data} date={dateState} changeDate={changeDate} apiDate={apiDate} />
      <Image data={data} date={dateState} previousDate={previousDate} nextDate={nextDate} />
    </div>
  );
}

export default App;
