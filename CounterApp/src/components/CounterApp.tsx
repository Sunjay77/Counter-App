import React from "react";
import ThirdChild from "./ThirdChild";

interface CountProps {
  count: number;
}
const CounterApp: React.FC<CountProps> = ({count}) => {
  return (
    <div className="counter-container">
      <h1 className="counter-title">Simple Counter</h1>
      <ThirdChild count={count}/>
    </div>
  );
};

export default CounterApp;
