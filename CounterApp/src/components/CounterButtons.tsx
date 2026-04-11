import React from "react";

interface ControlsProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterControls: React.FC<ControlsProps> = ({ count, setCount }) => {
  return (
    <div className="button-group">
      <button className="btn decrement" onClick={() => setCount(count - 1)}>
        −
      </button>

      <button className="btn reset" onClick={() => setCount(0)}>
        Reset
      </button>

      <button className="btn increment" onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};

export default CounterControls;
