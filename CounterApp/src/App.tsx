import { useState } from "react";
import CounterApp from "./components/CounterApp";
import CounterControls from "./components/CounterButtons";
import './App.css'

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="main-container">
      <CounterApp count={count}/>
      <CounterControls count={count} setCount={setCount} />
    </div>
  );
};
export default App;
