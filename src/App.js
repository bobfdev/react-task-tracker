import { useState } from 'react';
import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Car Wash',
          day: 'Jan 15th at 12:00pm',
          reminder: true,
      },
      {
          id: 2,
          text: 'Dentist Appointment',
          day: 'Jan 17th at 8:00am',
          reminder: true,
      },
      {
          id: 3,
          text: 'Electric Bill Due',
          day: 'Jan 31st at 8:00am',
          reminder: true,
      },
  ]);

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
      <Header />
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
