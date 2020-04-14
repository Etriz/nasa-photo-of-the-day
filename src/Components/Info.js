import React from "react";

export default function Info(props) {
  return (
    <div>
      <h2>{props.data.title}</h2>
      <img src={props.data.url} alt="daily img"></img>
    </div>
  );
}
