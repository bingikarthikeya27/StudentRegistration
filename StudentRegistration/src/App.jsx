import React from "react";
import CourseTypes from "./components/CourseTypes";
import Courses from "./components/Courses";
import CourseOfferings from "./components/CourseOfferings";
import StudentRegistration from "./components/StudentRegistration";
import './App.css';
function App() {
  return (
    <div className="kkk"style={{ padding: "20px" }}>
      <h1>Student Registration System</h1>
      <CourseTypes />
      <Courses />
      <CourseOfferings />
      <StudentRegistration />
    </div>
  );
}

export default App;
