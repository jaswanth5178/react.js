
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([
    { id: 1, todo: "Have Breakfast", completed: false },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [filter, setFilter] = useState("all");

  // Add a new todo
  function handleAdd() {
    const todoText = text.trim();

    if (!todoText) {
      alert("Please enter a todo!");
      return;
    }

    setData((prev) => [
      ...prev,
      {
        id: Date.now(),
        todo: todoText,
        completed: false,
      },
    ]);

    setText("");
  }

  // Delete a todo
  function handleDelete(id) {
    setData((prev) => prev.filter((item) => item.id !== id));

    if (editingId === id) {
      setEditingId(null);
      setEditText("");
    }
  }

  // Mark a todo as completed or pending
  function handleToggle(id) {
    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  }

  // Start editing
  function handleEdit(item) {
    setEditingId(item.id);
    setEditText(item.todo);
  }

  // Save edited todo
  function handleUpdate(id) {
    const updatedText = editText.trim();

    if (!updatedText) {
      alert("Todo cannot be empty!");
      return;
    }

    setData((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, todo: updatedText }
          : item
      )
    );

    setEditingId(null);
    setEditText("");
  }

  // Cancel editing
  function handleCancel() {
    setEditingId(null);
    setEditText("");
  }

  // Filter todos
  const filteredData = data.filter((item) => {
    if (filter === "active") return !item.completed;
    if (filter === "completed") return item.completed;
    return true;
  });

  const completedCount = data.filter(
    (item) => item.completed
  ).length;

  const pendingCount = data.length - completedCount;

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My Todo List</h1>
        <p className="subtitle">Organize your day, one task at a time.</p>

        {/* Add Todo */}
        <div className="add-section">
          <input
            type="text"
            placeholder="Enter new todo here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleAdd();
            }}
          />

          <button className="add-btn" onClick={handleAdd}>
            Add Todo
          </button>
        </div>

        {/* Task Statistics */}
        <div className="stats">
          <div className="stat-card">
            <span>Total Tasks</span>
            <strong>{data.length}</strong>
          </div>

          <div className="stat-card">
            <span>Pending</span>
            <strong>{pendingCount}</strong>
          </div>

          <div className="stat-card">
            <span>Completed</span>
            <strong>{completedCount}</strong>
          </div>
        </div>

        {/* Filters */}
        <div className="filters">
          <button
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>

          <button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        {/* Todo Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Todo</th>
                <th>Completed</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>

                    <td
                      className={
                        item.completed ? "completed-text" : ""
                      }
                    >
                      {editingId === item.id ? (
                        <input
                          className="edit-input"
                          value={editText}
                          onChange={(e) =>
                            setEditText(e.target.value)
                          }
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              handleUpdate(item.id);
                            }
                            if (e.key === "Escape") {
                              handleCancel();
                            }
                          }}
                          autoFocus
                        />
                      ) : (
                        item.todo
                      )}
                    </td>

                    <td>
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => handleToggle(item.id)}
                        aria-label={`Mark ${item.todo} as completed`}
                      />
                    </td>

                    <td className="actions">
                      {editingId === item.id ? (
                        <>
                          <button
                            className="save-btn"
                            onClick={() => handleUpdate(item.id)}
                          >
                            Save
                          </button>

                          <button
                            className="cancel-btn"
                            onClick={handleCancel}
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            className="edit-btn"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>

                          <button
                            className="delete-btn"
                            onClick={() => handleDelete(item.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="empty-message">
                    No todos found. Add a task to get started!
                  </td>
                </tr>
              )}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan="4">
                  Todo List App | Created by Sudesh
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default App;
