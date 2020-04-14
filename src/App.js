import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header";
import Info from "./Components/Info";
import "./App.css";
import TEST from "./TEST-DATA.json";

function App() {
  const [data, setData] = useState({});
  const [test, settest] = useState(TEST);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.error("Error!", err));
  }, []);
  return (
    <div className="App">
      <Header data={test} />
      <Info data={test} />
    </div>
  );
}

export default App;
