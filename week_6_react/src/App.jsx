import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [todo, setTodo] = useState()
  const [id, setId] = useState([])

  useEffect(() => {
    axios.get('https://sum-server.100xdevs.com/todos')
    .then((res) => {
      const ids = res.data.todos.map(todo => todo.id);
      setId(ids)
      console.log(ids)
    }).catch((err) => {
      console.log(err)
    });
  }, [])

  const handleClick = async (itemId) => {
    axios.get('https://sum-server.100xdevs.com/todo?id='+itemId)
    .then((res) => {
      console.log(res.data.todo)
      setTodo(res.data.todo)
    }).catch((err) => {
      console.log(err)
    });
  }


  return(
    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {id.map((item) => {
          return <button key={item} onClick={() => handleClick(item)}>{item}</button>
        })}
      </ul> <br /><br />
      {todo && <ul>
          <li key={todo.id}>{todo.id}&nbsp; &nbsp; {todo.title},&nbsp;{todo.description}</li>
      </ul>}
    </div>
  )
}

export default App
