import React, { useEffect, useState } from 'react'
import Form from '../Form/Form'
import { TodoProvider } from '../Context/Context'
import FormItem from '../FormItem/FormItem'

export default function NewToDo() {
  const [activitylist, setActivityList] = useState("")
  const [todos, setTodos] = useState([])
  const addTodoList = () => {
    if (!activitylist == "") {
      setTodos(todos => {

        return [...todos, activitylist]

      })

      console.log(todos)
    }
    setActivityList("");
  }
  const handleRemove = (id) => {
    setTodos((old) =>
      old.filter((aa, index) => index !== id)
    )
    console.log(todos)
  }
  const toggleComplete = (id) => {
    console.log(id)
    setTodos((prev) => prev.map((prevTodo,index) => index=== id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  const updateTodo = (id, change) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? change : prevTodo))
    console.log(todos);
  }
  useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem("todos"));
   if(todos && todos.length>0){
    setTodos(todos)
   }
  },[])
  useEffect(()=>{ 
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider
      value={{
        addTodoList,
        handleRemove,
        todos,
        setTodos,
        toggleComplete,
        updateTodo,
        activitylist,
        setActivityList,
      }}
    >
      <div>
        <Form activitylists={activitylist} setActivityLists={setActivityList} />
        <div className="flex flex-wrap gap-y-3 mt-3">
          {todos.map((todo, index) => (
            <div key={index} >
              <FormItem list={todo} id={index} setlist={setTodos} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}
