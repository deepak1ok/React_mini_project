import React, { useState } from "react";
function Time() {
  let newTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(newTime);
  setInterval(() => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }, 1000);
  const heading = {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "2.6rem",
    color: "#fa2191",
  };
  return (
    <>
      <h1 style={heading}>Time: {time}</h1>
    </>
  );
}
export default Time;
