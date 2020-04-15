import React, { useState } from "react";

export default function Info(props) {
  const [isLarge, setIsLarge] = useState(false);
  const resizeImage = () => {
    if (isLarge === false) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };
  return (
    <div className="dailyimg">
      <h2>{props.data.title}</h2>
      {!isLarge ? (
        <div className="smImg" onClick={() => resizeImage()}>
          <img src={props.data.url} alt="daily img" className="" />
        </div>
      ) : (
        <div className="lgImg" onClick={() => resizeImage()}>
          <img src={props.data.hdurl} alt="daily img large" className="" />
        </div>
      )}
      <div className="pagination">
        <button className="btn">Previous</button>
        <p>Click image to enlarge</p>
        <button className="btn">Next</button>
      </div>
    </div>
  );
}
