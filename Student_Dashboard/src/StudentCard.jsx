function StudentCard({ student }) {
  const eligible = student.attendance >= 75;

  return (
    <div className="student-card">

      <img
        src="/boopa.jpeg"
        alt="Student"
        className="student-image"
      />

      <h2>Student Details</h2>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Roll No:</strong> {student.rollNo}
      </p>

      <p>
        <strong>Department:</strong> {student.department}
      </p>

      <p>
        <strong>Year:</strong> {student.year}
      </p>

      <p>
        <strong>Semester:</strong> {student.semester}
      </p>

      <p>
        <strong>Attendance:</strong> {student.attendance}%
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {eligible ? "Eligible" : "Not Eligible"}
      </p>

    </div>
  );
}

export default StudentCard;
