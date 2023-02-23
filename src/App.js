import { useState } from "react";

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

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      ...clicks,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  const Button = ({ onClick, text }) => {
    return <button onClick={onClick}>{text}</button>;
  };

  const Display = ({ counter }) => {
    return <div>{counter}</div>;
  };

  return (
    <div>
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
