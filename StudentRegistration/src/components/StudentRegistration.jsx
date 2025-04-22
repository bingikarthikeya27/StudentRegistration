import React, { useState } from "react";

function StudentRegistration() {
  const [registrations, setRegistrations] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addRegistration = () => {
    if (!studentName || !course) return;
    const record = `${studentName} registered to ${course}`;
    if (editingIndex !== null) {
      const updated = [...registrations];
      updated[editingIndex] = record;
      setRegistrations(updated);
      setEditingIndex(null);
    } else {
      setRegistrations([...registrations, record]);
    }
    setStudentName("");
    setCourse("");
  };

  const editRegistration = (index) => {
    const [name, , courseName] = registrations[index].split(" registered to ");
    setStudentName(name);
    setCourse(courseName);
    setEditingIndex(index);
  };

  const deleteRegistration = (index) => {
    setRegistrations(registrations.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Student Name"
      />
      <input
        type="text"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Course"
      />
      <button onClick={addRegistration}>
        {editingIndex !== null ? "Update" : "Add"}
      </button>
      <ul>
        {registrations.map((reg, index) => (
          <li key={index}>
            {reg}
            <button onClick={() => editRegistration(index)}>Edit</button>
            <button onClick={() => deleteRegistration(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentRegistration;