import { useCounterStore } from "../store/useStore";

const ThirdChild: React.FC = () => {
  const { count } = useCounterStore();
  return <div>{count}</div>;
};
export default ThirdChild;
