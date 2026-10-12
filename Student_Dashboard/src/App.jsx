import Header from "./Header";
import StudentCard from "./StudentCard";
import SubjectList from "./SubjectList";
import Footer from "./Footer";
import "./App.css";

function App() {
  const student = {
    name: "VENKATA GANAPATHY P",
    rollNo: "CS2026011",
    department: "B.E(Cyber Security)",
    year: 2,
    semester: 3,
    attendance: 82
  };

  const subjects = ["React", "Data Structure", "Python", "Data Science", "DBMS"];

  return (
    <div>
      <Header />

      <StudentCard student={student} />

      <SubjectList subjects={subjects} />

      <Footer />
    </div>
  );
}

export default App;
