import CounterApp from "./components/CounterApp";
import CounterControls from "./components/CounterButtons";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <CounterApp />
      <CounterControls />
    </div>
  );
};
export default App;
