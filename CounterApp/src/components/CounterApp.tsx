import React from "react";
import ThirdChild from "./ThirdChild";

const CounterApp: React.FC = () => {
  return (
    <div className="counter-container">
      <h1 className="counter-title">COUNTER</h1>
      <ThirdChild />
    </div>
  );
};

export default CounterApp;
