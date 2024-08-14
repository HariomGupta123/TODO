import { useState } from 'react'
import { useTodo } from '../Context/Context';

function FormItem({list,id}) {
  const {
    handleRemove,

    updateTodo,
    toggleComplete,
  } = useTodo();
  const [change,setChange]=useState(list)
  const [isEdited,setEdited]=useState(false);
  const handleEdite=()=>{
      if (change.trim() !== "") {
        updateTodo(id, { ...list, todo: change });
        setEdited(false)
        }

  }
 const toggleCompleted=()=>{
  console.log(id)
  toggleComplete(id)
 }
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-4 shadow-sm w-[640px] shadow-white/50 duration-300  text-black  ${
        list.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={list.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEdited ? "border-black/10 px-2" : "border-transparent"
        } ${list.completed ? "line-through" : ""}`}
        value={change}
        onChange={(e) => setChange(e.target.value)}
        readOnly={!isEdited}
      />
      {/* Edit, Save Button */}
      <button
        onClick={() => {
          if (list.completed) return;
          if (isEdited) {
            handleEdite();
          } else setEdited((pre) => !pre);
        }}
        disabled={list.completed}
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
      >
        {isEdited ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => handleRemove(id)}
      >
        ❌
      </button>
    </div>
  );
}

export default FormItem
