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

  if (props.data === "Error")
    return (
      <DailyImg>
        <h2>Server Error</h2>
        <p>Please Try Again Later</p>
      </DailyImg>
    );
  else if (!props.data.url)
    return (
      <DailyImg>
        <h2>Loading...</h2>
      </DailyImg>
    );
  else
    return (
      <DailyImg className="dailyimg">
        <h2>{props.data.title}</h2>
        {!isLarge ? (
          <>
            <div className="smImg" onClick={() => resizeImage()}>
              {props.data.media_type === "image" ? (
                <img src={props.data.url} alt="daily img" className="" />
              ) : (
                <div
                  className="video"
                  style={{
                    position: "relative",
                    paddingBottom: "56.25%" /* 16:9 */,
                    paddingTop: 25,
                    height: 0,
                  }}>
                  <iframe
                    title={props.data.title}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                    }}
                    src={props.data.url}
                    frameBorder="0"
                  />
                </div>
              )}
            </div>
            <div className="pagination">
              <Button onClick={props.previousDate}>Previous</Button>
              <p>Click image to enlarge</p>
              <Button onClick={props.nextDate}>Next</Button>
            </div>
          </>
        ) : (
          <div className="lgImg" onClick={() => resizeImage()}>
            <img src={props.data.hdurl} alt="daily img large" className="" />
          </div>
        )}
      </DailyImg>
    );
}
