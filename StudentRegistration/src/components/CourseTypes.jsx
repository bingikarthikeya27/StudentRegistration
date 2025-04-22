import React, { useState } from "react";

function CourseTypes() {
  const [types, setTypes] = useState([]);
  const [newType, setNewType] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addType = () => {
    if (!newType) return;
    if (editingIndex !== null) {
      const updated = [...types];
      updated[editingIndex] = newType;
      setTypes(updated);
      setEditingIndex(null);
    } else {
      setTypes([...types, newType]);
    }
    setNewType("");
  };

  const editType = (index) => {
    setNewType(types[index]);
    setEditingIndex(index);
  };

  const deleteType = (index) => {
    setTypes(types.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Course Types</h2>
      <input
        type="text"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
        placeholder="Enter course type"
      />
      <button onClick={addType}>{editingIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {types.map((type, index) => (
          <li key={index}>
            {type}
            <button onClick={() => editType(index)}>Edit</button>
            <button onClick={() => deleteType(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypes;