import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Car Wash',
          date: 'Jan 15th at 12:00pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Dentist Appointment',
          date: 'Jan 17th at 8:00am',
          reminder: true,
      },
      {
          id: 3,
          text: 'Electric Bill Due',
          date: 'Jan 31st at 8:00am',
          reminder: true,
      },
  ]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
        tasks.map((task) => 
          task.id === id ? { ...task, reminder: !task.reminder } : task));
  }

  return (
    <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} 
        />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
        ) : (
          'No Current Tasks'
          )}
    </div>
  );
}

// class based component example

// class App extends React.Component {
//   render() {
//     return (
//       <h1>Hello</h1>
//     )
//   }
// }

export default App;
