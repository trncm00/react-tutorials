import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>The app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};
function App() {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(left + updatedRight);
  };

  return (
    <div>
      <History allClicks={allClicks} />
      <br />

      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <br />
      <p>Left{allClicks.join(" ")}Right</p>
      <p>total{total}</p>
      <br />
      {left}
      <button onClick={() => setLeft(left + 1)}> left</button>
      <button onClick={() => setRight(right + 1)}> right </button>
      {right}
      <br />

      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <br />
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
      <br />
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero'd out" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
}

export default App;
