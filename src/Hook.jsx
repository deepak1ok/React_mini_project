import React, { useState } from "react";

function Hook() {
  const [count, setCount] = useState(0);
  const IncNum = (e) => {
    setCount(count + 1);
    e.target.style.boxShadow = "none";
    e.target.style.transform = "translate(0px, 10px)";

    setTimeout(() => {
      e.target.style.boxShadow = "-4px 6px 3px 0px #725cca";
      e.target.style.transform = "translate(0, 0)";
    }, 200);
  };

  const container = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  };

  const btnStyle = {
    all: "unset",
    border: "2px solid blue",
    padding: "18px 28px",
    backgroundColor: "blue",
    color: "white",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "-4px 6px 3px 0px #725cca",
  };

  return (
    <div style={container}>
      <h1>{count}</h1>
      <button style={btnStyle} onClick={IncNum}>
        Click me
      </button>
    </div>
  );
}
export default Hook;
