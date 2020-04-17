import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Image from "./Components/Image";
import "./App.css";
import TEST from "./TEST-DATA.json";

function App() {
  const [test] = useState(TEST);
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    defaultTodayDate();
  }, [date]);
  const [apiDate, setApiDate] = useState("2020-04-08");
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${apiDate}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Axios Error!", err));
  }, [apiDate]);
  const [data, setData] = useState({});

  const defaultTodayDate = () => {
    let todayDate = date;
    let month = (todayDate.getMonth() + 1).toString().padStart(2, "0");
    let day = todayDate.getDate();
    let year = todayDate.getFullYear();
    setApiDate(`${year}-${month}-${day}`); //sets date state in format yyyy-mm-dd as needed by API
  };
  const changeDate = (date) => {
    setDate(date);
  };
  return (
    <div className="App">
      <Header data={data} date={date} changeDate={changeDate} />
      <Image data={data} date={date} />
    </div>
  );
}

export default App;
