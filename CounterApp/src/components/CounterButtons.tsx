import React from "react";
import { useCounterStore } from "../store/useStore";

const CounterControls: React.FC = () => {
  const { dec, reset, inc } = useCounterStore();

  return (
    <div className="button-group">
      <button className="btn decrement" onClick={dec}>
        −
      </button>

      <button className="btn reset" onClick={reset}>
        Reset
      </button>

      <button className="btn increment" onClick={inc}>
        +
      </button>
    </div>
  );
};

export default CounterControls;
