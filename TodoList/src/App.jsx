
import { useState } from 'react';
import './App.css'
import AddTodo from './AddTodo';
import NewToDo from './NewToDO/NewToDo';

const App = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([]);
  const Add = () => {
    if (!input == "") {
      setList((oldlist) => {
        return (

          [...oldlist, input]

        )
      })
    }
    setInput('')

  }
  const remove = (id) => {
    setList((oldlist) => {
      return oldlist.filter((arry, index) => {
        return index !== id;
      });
      
    });
console.log(list.id)

  }
  return (
    <>
      {/*<div className="todo">
        <h1 style={{ color: "black" }}>hariom</h1>
        <input
          type="text"
          placeholder="add your todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={Add}>add</button>
      </div>
      <div className="add">
        {list.map((arr, index) => {
          return (
            <AddTodo input={arr} key={index} id={index} onSelect={remove} />
          );
        })}
      </div>*/}

      <div className=" min-h-screen py-8 w-[800px] ">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
          <NewToDo/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          
          </div>
        </div>
      </div>
    </>
  );
}
export default App;