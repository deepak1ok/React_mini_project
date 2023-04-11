import React from "react";
import Time from "./Time";
import Hook from "./Hook";
function App() {
  const centre = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const heading = {
    textAlign: "center",
    padding: "0.68em",
    backgroundColor: "#ffe9c5",
    margin: "4em 0 0 0",
    fontWeight: "bold",
    fontSize: "2.6rem",
    borderRadius: "30px",
    color: "#fa9191",
  };

  // Date
  let hrs = new Date().getHours();
  let text = "";

  if (hrs >= 0 && hrs < 12) {
    text = "Good Morning";
  } else if (hrs >= 12 && hrs < 20) {
    text = "Good Afternoon";
  } else {
    text = "Good Night";
  }
  let changeColor = [];
  if (text === "Good Morning") {
    changeColor = {
      color: "#0a8600",
    };
  } else if (text === "Good Afternoon") {
    changeColor = {
      color: "orange",
    };
  } else {
    changeColor = {
      color: "black",
    };
  }
  return (
    <>
      <div style={centre}>
        <span style={heading}>
          Hello Sir,
          <span style={changeColor}> {text}</span>
        </span>
        <Time />
        <Hook />
      </div>
    </>
  );
}
export default App;
