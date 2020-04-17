import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0rem 1rem;
  background: #61dafb;
  cursor: pointer;
  border: 1px solid #61dafb;
  &:hover {
    border: 1px solid #61dafb;
    background: white;
  }
`;
const DailyImg = styled.div`
  color: lightgray;
  padding: 1rem;
`;

export default function Image(props) {
  const [isLarge, setIsLarge] = useState(false);
  const resizeImage = () => {
    if (isLarge === false) {
      setIsLarge(true);
    } else {
      setIsLarge(false);
    }
  };
  return (
    <DailyImg className="dailyimg">
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
        <Button>Previous</Button>
        <p>Click image to enlarge</p>
        <Button>Next</Button>
      </div>
    </DailyImg>
  );
}
