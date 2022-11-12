import React, { useState, useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import CleanUp from "./CleanUp";

const App: React.FC = () => {
  const [status, setStatus] = useState("text");
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  const [display, setDisplay] = useState(true);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    console.log("aaaaa");
    document.title = `curent value is ${counter}`;
  },[counter])
  return (
    <div className="App">
      <header className="App-header">
        <h4>{status}</h4>
        <button onClick={() => setStatus("new text")}>Button</button>
        <h4>{input}</h4>
        <input type="text" value={input} onChange={onChangeHandler} />
        <h4>{counter}</h4>
        <button onClick={() => setCounter((preCounter) => preCounter + 1)}>
          Increment
        </button>
        {display && <CleanUp />}
        <button onClick={() => setDisplay(!display)}>
          Toggle Display
        </button>
        <Counter />
      </header>
    </div>
  );
};

export default App;
