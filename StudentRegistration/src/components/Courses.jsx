import React, { useState } from "react";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addCourse = () => {
    if (!newCourse) return;
    if (editingIndex !== null) {
      const updated = [...courses];
      updated[editingIndex] = newCourse;
      setCourses(updated);
      setEditingIndex(null);
    } else {
      setCourses([...courses, newCourse]);
    }
    setNewCourse("");
  };

  const editCourse = (index) => {
    setNewCourse(courses[index]);
    setEditingIndex(index);
  };

  const deleteCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Courses</h2>
      <input
        type="text"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
        placeholder="Enter course name"
      />
      <button onClick={addCourse}>{editingIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course}
            <button onClick={() => editCourse(index)}>Edit</button>
            <button onClick={() => deleteCourse(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;