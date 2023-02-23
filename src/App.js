import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const increaseByOne = () => setCounter(counter + 1);
  const decreaseByOne = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  const Button = (props) => {
    return <button onClick={props.onClick}>{props.text}</button>;
  };
  const Display = (props) => {
    return <div>{props.counter}</div>;
  };

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero'd out" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  );
}

export default App;
