interface Props {
  count: number;
}

const ThirdChild: React.FC<Props> = ({ count }) => {
  return <div className="counter-display">{count}</div>;
};
export default ThirdChild;
