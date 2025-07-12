import { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () => setCounter(counter + 1);
  const setZero = () => setCounter(0);
  const minusOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setZero} text="reset" />
      <Button onClick={minusOne} text="minusOne" />
    </div>
  );
};

export default App;
