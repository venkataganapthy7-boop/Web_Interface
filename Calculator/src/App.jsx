import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const calculate = () => {
    try {
      if (!value) return;
      setValue(String(eval(value)));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>

      <input value={value} readOnly />

      <div className="buttons">
        <button onClick={() => setValue(value + "7")}>7</button>
        <button onClick={() => setValue(value + "8")}>8</button>
        <button onClick={() => setValue(value + "9")}>9</button>
        <button onClick={() => setValue(value + "+")}>+</button>

        <button onClick={() => setValue(value + "4")}>4</button>
        <button onClick={() => setValue(value + "5")}>5</button>
        <button onClick={() => setValue(value + "6")}>6</button>
        <button onClick={() => setValue(value + "-")}>−</button>

        <button onClick={() => setValue(value + "1")}>1</button>
        <button onClick={() => setValue(value + "2")}>2</button>
        <button onClick={() => setValue(value + "3")}>3</button>
        <button onClick={() => setValue(value + "*")}>×</button>

        <button onClick={() => setValue(value + "0")}>0</button>
        <button onClick={() => setValue(value + ".")}>.</button>
        <button onClick={() => setValue(value + "/")}>÷</button>
        <button onClick={calculate}>=</button>

        <button className="clear" onClick={() => setValue("")}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
