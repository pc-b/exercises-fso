import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  } else {
    return <div>button press history: {props.allClicks.join(" ")}</div>;
  }
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    console.log(`left before: ${left}`);
    const newLeft = left + 1;
    setLeft(newLeft);
    console.log(`left after: ${left}`);

    setTotal(newLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    console.log(`right before: ${right}`);
    const newRight = right + 1;
    setRight(newRight);
    console.log(`right after: ${right}`);

    setTotal(left + newRight);
  };

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <p>total: {total}</p>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
