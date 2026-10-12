import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ajay Kumar", status: "Present" },
    { id: 2, name: "Bharath", status: "Present" },
    { id: 3, name: "Charan", status: "Absent" },
    { id: 4, name: "Dharun", status: "Present" },
    { id: 5, name: "Gokul", status: "Present" },
    { id: 6, name: "Harish", status: "Absent" },
    { id: 7, name: "Kavin", status: "Present" },
    { id: 8, name: "Lokesh", status: "Present" },
    { id: 9, name: "Manoj", status: "Present" },
    { id: 10, name: "Naveen", status: "Absent" },
    { id: 11, name: "Praveen", status: "Present" },
    { id: 12, name: "Rahul", status: "Present" },
    { id: 13, name: "Sanjay", status: "Present" },
    { id: 14, name: "Sathish", status: "Absent" },
    { id: 15, name: "Surya", status: "Present" },
    { id: 16, name: "Vijay", status: "Present" },
    { id: 17, name: "Vignesh", status: "Present" },
    { id: 18, name: "Yashwanth", status: "Absent" },
    { id: 19, name: "Yakesh", status: "Present" },
    { id: 20, name: "yazhini", status: "Present" }
  ]);

  const updateAttendance = (id, newStatus) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status: newStatus }
          : student
      )
    );
  };

  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="app">

      <div className="header">
        <h1>Student Attendance Tracker</h1>
        <p>Manage and monitor daily student attendance</p>
      </div>

      <div className="summary-container">

        <div className="summary-card total-card">
          <h3>Total Students</h3>
          <h2>{students.length}</h2>
        </div>

        <div className="summary-card present-card">
          <h3>Present</h3>
          <h2>{presentCount}</h2>
        </div>

        <div className="summary-card absent-card">
          <h3>Absent</h3>
          <h2>{absentCount}</h2>
        </div>

      </div>

      <div className="table-container">
        <h2>Attendance List</h2>

        <table>
          <thead>
            <tr>
              <th>Roll No</th>
              <th>Student Name</th>
              <th>Status</th>
              <th>Mark Attendance</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>

                <td>{student.id}</td>
                <td>{student.name}</td>

                <td>
                  <span
                    className={
                      student.status === "Present"
                        ? "status present-status"
                        : "status absent-status"
                    }
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <button
                    className="present-btn"
                    onClick={() =>
                      updateAttendance(student.id, "Present")
                    }
                  >
                    Present
                  </button>

                  <button
                    className="absent-btn"
                    onClick={() =>
                      updateAttendance(student.id, "Absent")
                    }
                  >
                    Absent
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
