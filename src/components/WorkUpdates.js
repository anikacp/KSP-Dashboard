import React, { useState } from 'react';
import './WorkUpdates.css';

const initialTasks = [
  { id: 1, time: '03 Jul 2023', service: 'Law & Order', personInCharge: 'Guru Alok Sir', position: 'DySP', status: 'Done' },
  { id: 2, time: '04 Jul 2023', service: 'Crime', personInCharge: 'Maruthi Sir', position: 'PI', status: 'Pending' },
  { id: 3, time: '05 Jul 2024', service: 'Court monitoring', personInCharge: 'Bharath Sir', position: 'PSI', status: 'Done' },
  { id: 4, time: '06 Jul 2023', service: 'Station Management', personInCharge: 'Kuldeep Sir', position: 'PI', status: 'Done' },
];

const WorkUpdates = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({
    time: '',
    service: '',
    personInCharge: '',
    position: '',
    status: 'Pending'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const addTask = () => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
    setNewTask({
      time: '',
      service: '',
      personInCharge: '',
      position: '',
      status: 'Pending'
    });
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: task.status === 'Done' ? 'Pending' : 'Done' } : task
    ));
  };

  return (
    <div className="work-updates">
      <h2>Work Updates</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={`task ${task.status.toLowerCase()}`}>
            <div>{task.time}</div>
            <div>{task.service}</div>
            <div>{task.personInCharge}</div>
            <div>{task.position}</div>
            <div className="status" onClick={() => toggleStatus(task.id)}>{task.status}</div>
          </li>
        ))}
      </ul>
      <div className="add-task">
        <h3>Add New Task</h3>
        <input type="text" name="time" placeholder="Time" value={newTask.time} onChange={handleInputChange} />
        <input type="text" name="service" placeholder="Service" value={newTask.service} onChange={handleInputChange} />
        <input type="text" name="personInCharge" placeholder="Person In Charge" value={newTask.personInCharge} onChange={handleInputChange} />
        <input type="text" name="position" placeholder="Position" value={newTask.position} onChange={handleInputChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default WorkUpdates;
