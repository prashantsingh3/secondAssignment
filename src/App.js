import React, { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [err, setErr] = useState("");

  const sumOfN = useMemo(() => {
    return sumN(number);
  }, [number]);
  const [counter, setCounter] = useState(false);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
    if (isNaN(e.target.value ) || e.target.value<0) {
      setErr("Please enter a valid number !");
    } else {
      setErr("");
    }
    setCounter(false);
  };

  const counterHander = () => {
    setCounter(true);
  };
  return (
    <div className="App">
      <h2>Sum of all numbers between 1 and N(number entered in Text Field)</h2>
      <input
        type="text"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>
      <div>
        <small style={{ color: "red" }}>{err}</small>
      </div>
      <br />
      Sum:
      {counter ? <span> {sumOfN}</span> : null}
      <br />
      <button onClick={counterHander}>SUM</button>
    </div>
  );
}

function sumN(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total = total + i;
  }
  return total;
}

export default App;
