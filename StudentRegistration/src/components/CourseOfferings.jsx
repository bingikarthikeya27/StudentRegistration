import React, { useState } from "react";

function CourseOfferings() {
  const [offerings, setOfferings] = useState([]);
  const [newOffering, setNewOffering] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addOffering = () => {
    if (!newOffering) return;
    if (editingIndex !== null) {
      const updated = [...offerings];
      updated[editingIndex] = newOffering;
      setOfferings(updated);
      setEditingIndex(null);
    } else {
      setOfferings([...offerings, newOffering]);
    }
    setNewOffering("");
  };

  const editOffering = (index) => {
    setNewOffering(offerings[index]);
    setEditingIndex(index);
  };

  const deleteOffering = (index) => {
    setOfferings(offerings.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Course Offerings</h2>
      <input
        type="text"
        value={newOffering}
        onChange={(e) => setNewOffering(e.target.value)}
        placeholder="Enter course offering (e.g. Math - Spring 2025)"
      />
      <button onClick={addOffering}>{editingIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {offerings.map((offering, index) => (
          <li key={index}>
            {offering}
            <button onClick={() => editOffering(index)}>Edit</button>
            <button onClick={() => deleteOffering(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseOfferings;