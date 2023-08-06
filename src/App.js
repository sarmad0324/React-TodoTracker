import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Task from './components/Task'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showTask, setShowTask] = useState(false)
  const [tasks, settasks] = useState([])

  // Delete Task
  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id))
  }
  // Toggle Reminder
  const Remainder = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: task.reminder } : task
      )
    )
  }
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    settasks([...tasks, newTask])
  }

  return (
    <Router>
      <div className="App">
        <Header
          onAdd={() => setShowTask(!showTask)}
          showAdd={showTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 > 0 ? (<Task tasks={tasks} onDelete={deleteTask} remainder={Remainder} />) : ("No task to show")}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;

//https://github.com/bradtraversy/react-crash-2021 full code with json server



