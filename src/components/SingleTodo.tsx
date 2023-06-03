import React, { useState,useEffect,useRef } from "react";
import { Todo } from "../models/models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
   const [edit, setedit] = useState<boolean>(false);
   const [editTodo, setEditTodo] = useState<string>(todo.todo)

   const inputRef = useRef<HTMLInputElement>(null);
   useEffect(() => {
     inputRef.current?.focus();
   }, [edit]);

    const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

    const handleDelete = (id: number) => {
    setTodos(
      todos.filter((todo) =>
        todo.id !== id 
      )
    );
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setedit(false);
  };



  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, todo.id)}>
     {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
          ref={inputRef}
        />
      ) : todo.isDone ? (
        <s className="todos__single--text">{todo.todo}</s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}



      <span className="icon" onClick={() => { 
        if(!edit && !todo.isDone){
            setedit(!edit)
        }
      }}>
        <AiFillEdit />
      </span>
      <span className="icon" onClick={() => handleDelete(todo.id)}>
        <AiFillDelete />
      </span>
      <span className="icon" onClick={() => handleDone(todo.id)}>
        <MdDone />
      </span>
    </form>
  );
};

export default SingleTodo;
