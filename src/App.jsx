import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [inputText, setInputText] = useState('')

  const addTask = () => {
    if (inputText.trim() === '') return
    const newTask = {
      id: Date.now(),
      text: inputText,
      completed: false,
    }
    setTasks([...tasks, newTask])
    setInputText('')
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) addTask()
  }

  return (
    <div className="app">
      <h1>タスクボード</h1>
      <div className="input-area">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力してください"
        />
        <button onClick={addTask}>追加</button>
      </div>
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default App
