import React, { useState, useEffect } from 'react';

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks are updated
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTask('');
  };

  // Handle editing a task
  const handleEditTask = (index) => {
    setEditIndex(index);
    setEditText(tasks[index]);
  };

  // Save the edited task
  const handleSaveTask = () => {
    if (editText.trim() === '') return;
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = editText;
    setTasks(updatedTasks);
    setEditIndex(null);
    setEditText('');
  };

  // Handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-purple-950 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Your tasks for today</h1>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-3 py-2 rounded-l bg-gray-100 text-gray-900 focus:outline-none"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-r"
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center mb-2 p-2 rounded bg-purple-700 hover:bg-purple-800">
            {editIndex === index ? (
              <div className="flex flex-1">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-2 py-1 bg-gray-100 text-gray-900 rounded-l focus:outline-none"
                />
                <button
                  onClick={handleSaveTask}
                  className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-r"
                >
                  Save
                </button>
              </div>
            ) : (
              <span className="flex-1">{task}</span>
            )}
            <div className="flex items-center ml-2">
              <button
                onClick={() => handleEditTask(index)}
                className="px-2 py-1 text-sm text-blue-400 hover:text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(index)}
                className="px-2 py-1 text-sm text-red-400 hover:text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
