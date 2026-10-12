import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    name: "",
    roll: "",
    tamil: "",
    english: "",
    maths: "",
    science: "",
    computer: ""
  });

  const update = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const marks = [
    Number(student.tamil),
    Number(student.english),
    Number(student.maths),
    Number(student.science),
    Number(student.computer)
  ];

  const total = marks.reduce((a, b) => a + b, 0);
  const percentage = total / 5;
  const result = marks.some((m) => m < 35) ? "Fail" : "Pass";

  const grade =
    result === "Fail"
      ? "F"
      : percentage >= 90
      ? "A+"
      : percentage >= 80
      ? "A"
      : percentage >= 70
      ? "B"
      : percentage >= 60
      ? "C"
      : "D";

  return (
    <div className="app">
      <div className="card">
        <h1>Student Report Card</h1>
        <p>Academic Performance Report</p>

        <div className="details">
          <input name="name" placeholder="Student Name" onChange={update} />
          <input name="roll" placeholder="Roll Number" onChange={update} />
        </div>

        <div className="marks">
          <input name="tamil" type="number" placeholder="Tamil" onChange={update} />
          <input name="english" type="number" placeholder="English" onChange={update} />
          <input name="maths" type="number" placeholder="Maths" onChange={update} />
          <input name="science" type="number" placeholder="Science" onChange={update} />
          <input name="computer" type="number" placeholder="Computer" onChange={update} />
        </div>

        <div className="report">
          <h2>Report</h2>

          <div className="row">
            <span>Student</span>
            <b>{student.name || "-"}</b>
          </div>

          <div className="row">
            <span>Roll No</span>
            <b>{student.roll || "-"}</b>
          </div>

          <div className="row">
            <span>Total Marks</span>
            <b>{total} / 500</b>
          </div>

          <div className="row">
            <span>Percentage</span>
            <b>{percentage.toFixed(2)}%</b>
          </div>

          <div className="row">
            <span>Grade</span>
            <b>{grade}</b>
          </div>

          <div className={`result ${result.toLowerCase()}`}>
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
