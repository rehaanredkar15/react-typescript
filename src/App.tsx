import { useState } from 'react'
import InputField from './components/InputField'
import {Todo} from './models/models'
import './App.css';
import TodoList from './components/TodoList';


const App:React.FC = () => {

  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);

 const handleAdd = (e: React.SyntheticEvent) => {
  e.preventDefault();
  if(todo){
    setTodos([...todos,{id:Date.now(),todo,isDone:false}])
    setTodo("");
  }
 };
 

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
       <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default App
