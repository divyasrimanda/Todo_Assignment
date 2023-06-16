import React, {useEffect, useState} from 'react'
import TodoForm from './TodoForm';
import {v4 as uuidv4} from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

export const TodoWrapper = () =>{
    const [todos, setTodos] = useState([]);

    // storing todo list in local storage

    useEffect(()=>{
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, [])

    const addTodo = todo  => {
        const newTodoList = [...todos, {id: uuidv4(), task: todo, completed: false, isEditing:false}];
        setTodos(newTodoList);
        localStorage.setItem('todos',JSON.stringify(newTodoList))
    }

    const toggleComplete = (id) => {
        const newTodoList =   
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
          setTodos(newTodoList);
          localStorage.setItem('todos',JSON.stringify(newTodoList))
      }

  
   const deleteTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id)
    setTodos(newTodoList);
    localStorage.setItem('todos',JSON.stringify(newTodoList))
   }
 
   const editTodo = (id) => {
    const newTodoList = 
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
      setTodos(newTodoList);
  }
  const editTask = (task, id) => {
    const newTodoList = 
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
      setTodos(newTodoList);
      localStorage.setItem('todos',JSON.stringify(newTodoList))
  };
  return (
    <div className='Wrapper'>
        <h1>Get Things Done</h1>
        <TodoForm  addTodo={addTodo} />
        {todos.map((todo)=> (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo} />
            ) : (
                <Todo task={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
            )
        ))}
       
    </div>
  )
}

export default TodoWrapper